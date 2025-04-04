import { onBeforeUnmount } from "vue";

import { UnbindTooltipInjection } from "@/types/injectionKeys";
import { assertInject } from "@/utils";

import { popperProps, setupPopper } from "./popper";

export const tooltipProps = {
  ...popperProps,
} as const;

export const setupTooltip = (props, leafletRef) => {
  const { options, methods } = setupPopper(props, leafletRef);

  const unbindTooltip = assertInject(UnbindTooltipInjection);

  onBeforeUnmount(() => {
    unbindTooltip();
  });

  return { options, methods };
};
