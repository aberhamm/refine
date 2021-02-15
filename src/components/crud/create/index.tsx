import React from "react";
import { useHistory } from "react-router-dom";
import { Card } from "antd";
import pluralize from "pluralize";

import { useCreate } from "@hooks";
import { BaseRecord } from "@interfaces";

export interface CreateProps {
    resourceName: string;
    canEdit?: any;
}

export const Create: React.FC<CreateProps> = ({
    resourceName,
    canEdit,
    children,
}) => {
    const history = useHistory();

    const { mutate, error, isLoading } = useCreate(resourceName);

    const onFinish = async (values: BaseRecord): Promise<void> => {
        mutate(
            { values },
            {
                onSuccess: (data) => {
                    if (canEdit) {
                        return history.push(
                            `/resources/${resourceName}/edit/${data.data.id}`,
                        );
                    }

                    return history.push(`/resources/${resourceName}`);
                },
            },
        );
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                resourceName,
                onFinish,
                error: error,
                isLoading: isLoading,
            });
        }
        return child;
    });

    return (
        <Card title={`Create ${pluralize.singular(resourceName)}`}>
            {childrenWithProps}
        </Card>
    );
};
