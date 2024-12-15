"use client";

import clsx from "clsx";
import { NavbarItem } from "@nextui-org/navbar";
import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";

// 封装的 Navbar 组件
export default function NavList() {
  const handleClick = (
    e: any | MouseEvent,
    item: {
      label: string;
      href: string;
    },
  ) => {
    const items = document.querySelectorAll("[data-menu]");

    items.forEach((item) => {
      item.removeAttribute("data-active");
      item.innerHTML = item.innerHTML.replace(/^\s*\[\s*|\s*\]\s*$/g, "");
    });

    const target = e.currentTarget as HTMLElement;

    target.dataset.active = "true";
    target.innerText = `[ ${item.label} ]`;
  };

  return (
    <ul className="hidden lg:flex gap-4 justify-start ml-2">
      {siteConfig.navItems.map((item, index) => (
        <NavbarItem key={item.href}>
          <NextLink
            data-menu
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium",
            )}
            color="foreground"
            data-active={index === 0 ? "true" : "false"}
            href={item.href}
            onClick={function (params) {
              handleClick(params, item);
            }}
          >
            {index === 0 ? `[ ${item.label} ]` : item.label}
          </NextLink>
        </NavbarItem>
      ))}
    </ul>
  );
}
