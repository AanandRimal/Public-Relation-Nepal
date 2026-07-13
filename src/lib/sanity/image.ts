import createImageUrlBuilder from "@sanity/image-url";
import type { ImageAsset } from "@/domain/types";
import { getSanityClient } from "./client";

let builder: ReturnType<typeof createImageUrlBuilder> | null = null;

function getBuilder() {
  if (!builder) builder = createImageUrlBuilder(getSanityClient());
  return builder;
}

export type SanityImage = { asset?: { _ref?: string }; alt?: string } | null | undefined;

export function toImageAsset(image: SanityImage, fallbackAlt = ""): ImageAsset | undefined {
  const ref = image?.asset?._ref;
  if (!ref) return undefined;

  const dimensions = ref.match(/-(\d+)x(\d+)-/);
  return {
    url: getBuilder().image(image!).url(),
    alt: image?.alt || fallbackAlt,
    width: dimensions ? Number(dimensions[1]) : undefined,
    height: dimensions ? Number(dimensions[2]) : undefined,
  };
}
