import NextLink from "next/link";
import "@/styles/navgit.css";

import { GithubIcon } from "./icons";

import { siteConfig } from "@/config/site";

const Tags = {
  name: "Echo7",
  date: "2024-12-02",
  version: " v0.0.1-beta",
};

// 封装的 Navbar 组件
export default function NavGit() {
  return (
    <NextLink
      className="flex justify-start items-center gap-1 LOGO-title"
      href={siteConfig.links.github}
      style={{
        padding: 0,
        margin: 0,
      }}
    >
      <GithubIcon />
      <div>
        <div className="LOGO-name">
          <p
            className="font-bold text-inherit "
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            {Tags.name} Information
          </p>
        </div>
        <p
          className="font-bold text-inherit"
          style={{ fontSize: "12px", fontWeight: 500 }}
        >
          {Tags.date} {Tags.version}
        </p>
      </div>
    </NextLink>
  );
}
