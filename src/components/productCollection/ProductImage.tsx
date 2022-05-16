import React from "react";
import { Image, Typography } from "antd";
import { Link } from "react-router-dom"

interface Props {
    id: number | string,
    size: "large" | "small",
    title: string,
    imageSrc: string,
    price: number | string,
}

export const ProductImage: React.FC<Props> = ({ id, size, title, imageSrc, price }) => {
    return (
        <><Link to={`detail/${id}`}>
            {size === "large" ? (
                <Image src={imageSrc} width={'95%'} preview={false} />
            ) : (
                <Image src={imageSrc} width={'95%'} preview={false} />
            )}
            <div>
                {size === "large" ? (
                    <Typography.Text type="secondary">{title}</Typography.Text>
                ) : (
                    <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
                )}
                <Typography.Text type="danger" strong>￥{price}</Typography.Text>
            </div>
        </Link>
        </>
    )
}