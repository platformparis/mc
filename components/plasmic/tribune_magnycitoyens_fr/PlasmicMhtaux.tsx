// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8d21MsEaFrjU1q6tvNDHvf
// Component: 7vGKiFAlWbiu

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 8d21MsEaFrjU1q6tvNDHvf/projectcss
import sty from "./PlasmicMhtaux.module.css"; // plasmic-import: 7vGKiFAlWbiu/css

createPlasmicElementProxy;

export type PlasmicMhtaux__VariantMembers = {};
export type PlasmicMhtaux__VariantsArgs = {};
type VariantPropType = keyof PlasmicMhtaux__VariantsArgs;
export const PlasmicMhtaux__VariantProps = new Array<VariantPropType>();

export type PlasmicMhtaux__ArgsType = {};
type ArgPropType = keyof PlasmicMhtaux__ArgsType;
export const PlasmicMhtaux__ArgProps = new Array<ArgPropType>();

export type PlasmicMhtaux__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultMhtauxProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMhtaux__RenderFunc(props: {
  variants: PlasmicMhtaux__VariantsArgs;
  args: PlasmicMhtaux__ArgsType;
  overrides: PlasmicMhtaux__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__iaCmx)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tribune_magnycitoyens_fr/images/mhtx2012Png.png",
              fullWidth: 2296,
              fullHeight: 1580,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__ceSmA)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tribune_magnycitoyens_fr/images/mhtx2020Png.png",
              fullWidth: 2372,
              fullHeight: 1608,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img___1Y4DO)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tribune_magnycitoyens_fr/images/mhtx2021Png.png",
              fullWidth: 2479,
              fullHeight: 1543,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img___2YBeY)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tribune_magnycitoyens_fr/images/delib27Mars2024Jpeg.jpg",
              fullWidth: 572,
              fullHeight: 165,
              aspectRatio: undefined
            }}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMhtaux__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMhtaux__VariantsArgs;
    args?: PlasmicMhtaux__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMhtaux__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMhtaux__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMhtaux__ArgProps,
          internalVariantPropNames: PlasmicMhtaux__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMhtaux__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMhtaux";
  } else {
    func.displayName = `PlasmicMhtaux.${nodeName}`;
  }
  return func;
}

export const PlasmicMhtaux = Object.assign(
  // Top-level PlasmicMhtaux renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicMhtaux
    internalVariantProps: PlasmicMhtaux__VariantProps,
    internalArgProps: PlasmicMhtaux__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMhtaux;
/* prettier-ignore-end */
