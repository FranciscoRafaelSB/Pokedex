import React, { useEffect, useState } from "react";
import Image from "next/image";
import LinkNext from "next/link";

import { Button, Link, Navbar as Nav, Text, useTheme } from "@nextui-org/react";

const ListItemsNav = [
  { name: "FIRE", href: "/fire" },
  { name: "WATER", href: "/water" },
  { name: "GRASS", href: "/grass" },
  { name: "FAVORITES", href: "/favorites" },
];

export const Navbar = () => {
  const [indexNav, setIndexNav] = useState<number | null>(null);

  const { theme } = useTheme();

  const toggleLink = (index: number) => {
    setIndexNav(index);
  };

  return (
    <Nav
      // isBordered
      // isCompact
      shouldHideOnScroll
      variant={"sticky"}
      style={
        {
          // display: "flex",
          // justifyContent: "space-between",
          // padding: "1rem 2rem",
          // alignItems: "center",
          // width: "100%",
          // backgroundColor: theme?.colors.gray900.value,
        }
      }
    >
      <Nav.Brand>
        <LinkNext href="/" passHref>
          <Image
            src="https://i.ibb.co/x28X3Hf/Pokedex-logo.webp"
            width={120}
            height={50}
            alt={"Pokedex Logo"}
            priority
          />
        </LinkNext>
      </Nav.Brand>

      <Nav.Content>
        {ListItemsNav.map((item, index) => (
          <LinkNext
            key={index}
            passHref
            onClick={() => toggleLink(index)}
            href={item?.href}
            className={` nav-link ${indexNav === index ? "active" : ""}`}
          >
            {item.name}
          </LinkNext>
        ))}
      </Nav.Content>
    </Nav>
  );
};
