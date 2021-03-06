// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tskKM7gWsfxPWKdeF2whbc
// Component: Dm2XEDwRPZegl
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import LinkButton from "../../LinkButton"; // plasmic-import: F9ktD9kX0Pjhcl/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: tskKM7gWsfxPWKdeF2whbc/projectcss
import * as sty from "./PlasmicFeatureItem.module.css"; // plasmic-import: Dm2XEDwRPZegl/css

export type PlasmicFeatureItem__VariantMembers = {};

export type PlasmicFeatureItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicFeatureItem__VariantsArgs;
export const PlasmicFeatureItem__VariantProps = new Array<VariantPropType>();

export type PlasmicFeatureItem__ArgsType = {};
type ArgPropType = keyof PlasmicFeatureItem__ArgsType;
export const PlasmicFeatureItem__ArgProps = new Array<ArgPropType>();

export type PlasmicFeatureItem__OverridesType = {
  root?: p.Flex<"div">;
  linkButton?: p.Flex<typeof LinkButton>;
};

export interface DefaultFeatureItemProps {
  className?: string;
}

function PlasmicFeatureItem__RenderFunc(props: {
  variants: PlasmicFeatureItem__VariantsArgs;
  args: PlasmicFeatureItem__ArgsType;
  overrides: PlasmicFeatureItem__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box___0069T)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__glXfE)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__sVSpk
          )}
        >
          {"Unlimited Table Collection"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__y0XG3
          )}
        >
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
          }
        </div>

        <div className={classNames(defaultcss.all, sty.box__cTbC)}>
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__pkJkU
            )}
          >
            {"Starting from"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__zoSaZ
            )}
          >
            {" $399"}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__m2RtZ)}
        >
          <LinkButton
            data-plasmic-name={"linkButton"}
            data-plasmic-override={overrides.linkButton}
            className={classNames("__wab_instance", sty.linkButton)}
            size={"small" as const}
            text={"View More"}
            type={"solidOrange" as const}
          />
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "linkButton"],
  linkButton: ["linkButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  linkButton: typeof LinkButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeatureItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicFeatureItem__VariantsArgs;
  args?: PlasmicFeatureItem__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicFeatureItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicFeatureItem__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFeatureItem__ArgProps,
      internalVariantPropNames: PlasmicFeatureItem__VariantProps
    });

    return PlasmicFeatureItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatureItem";
  } else {
    func.displayName = `PlasmicFeatureItem.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatureItem = Object.assign(
  // Top-level PlasmicFeatureItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    linkButton: makeNodeComponent("linkButton"),

    // Metadata about props expected for PlasmicFeatureItem
    internalVariantProps: PlasmicFeatureItem__VariantProps,
    internalArgProps: PlasmicFeatureItem__ArgProps
  }
);

export default PlasmicFeatureItem;
/* prettier-ignore-end */
