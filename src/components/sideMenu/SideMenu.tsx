import { CompassOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { sideMenuList } from "./mockup";
import styles from "./SideMenu.module.css"
import MenuItem from "antd/lib/menu/MenuItem";

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as unknown as MenuItem;
}

export const SideMenu: React.FC = () => {
    const [items, setItems] = useState<any[]>([]);


    useEffect(() => {
        let list: any[] = [];
        sideMenuList.forEach((m, index) => {
            let sList: any[] = [];
            m.subMenu.forEach((sm, smIndex) => {
                let ssList: any[] = [];
                sm.subMenu.forEach((ssm, ssmIndex) => {
                    ssList.push(getItem(ssm, `side-menu-${index}-${smIndex}-${ssmIndex}`))
                })
                sList.push(getItem(sm.title, `side-menu-${index}-${smIndex}`, <CompassOutlined />, ssList))
            })
            list.push(getItem(m.title, `side-menu-${index}`, <CompassOutlined />, sList))
        })
        setItems(list)
    }, [])



    return (

        <Menu style={{ width: 256 }} mode="vertical" items={items} className={styles["side-menu"]} />
        // <Menu mode="vertical" className={styles["side-menu"]}>
        //     {sideMenuList.map((m, index) => (
        //         <Menu.SubMenu
        //             key={`side-menu-${index}`}
        //             title={<span><CompassOutlined />{m.title}</span>}
        //         >
        //             {m.subMenu.map((sm, smindex) => (
        //                 <Menu.SubMenu
        //                     key={`side-menu-${index}-sub-menu-${smindex}`}
        //                     title={<span><CompassOutlined />{sm.title}</span>}
        //                 >
        //                     {sm.subMenu.map((sms, smsindex) => (
        //                         <Menu.Item
        //                             key={`side-menu-${index}-sub-menu-${smindex}-sub-sub-menu-${smsindex}`}
        //                         >
        //                             <span><CompassOutlined />{sms}</span>
        //                         </Menu.Item>
        //                     ))}
        //                 </Menu.SubMenu>
        //             ))}
        //         </Menu.SubMenu>
        //     ))}
        // </Menu>
    )
}