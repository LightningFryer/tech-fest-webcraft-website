import { c as create_ssr_component, d as compute_rest_props, g as getContext, f as spread, h as escape_attribute_value, i as escape_object, e as escape, v as validate_component, j as add_attribute } from "../../chunks/ssr.js";
import "@formatjs/intl-segmenter/polyfill.js";
Promise.resolve();
const Copyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["weight", "color", "size", "mirrored"]);
  const { weight: ctxWeight, color: ctxColor, size: ctxSize, mirrored: ctxMirrored, ...restCtx } = getContext("iconCtx") || {};
  let { weight = ctxWeight ?? "regular" } = $$props;
  let { color = ctxColor ?? "currentColor" } = $$props;
  let { size = ctxSize ?? "1em" } = $$props;
  let { mirrored = ctxMirrored || false } = $$props;
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.mirrored === void 0 && $$bindings.mirrored && mirrored !== void 0)
    $$bindings.mirrored(mirrored);
  return `  <svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { fill: escape_attribute_value(color) },
      {
        transform: escape_attribute_value(mirrored ? "scale(-1, 1)" : void 0)
      },
      { viewBox: "0 0 256 256" },
      escape_object(restCtx),
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm41.59-52.79a52,52,0,1,1,0-62.43,12,12,0,1,1-19.18,14.42,28,28,0,1,0,0,33.6,12,12,0,1,1,19.18,14.41Z"></path>` : `${weight === "duotone" ? `<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM96,128a32,32,0,0,0,57.6,19.2,8,8,0,0,1,12.8,9.61,48,48,0,1,1,0-57.62,8,8,0,0,1-12.8,9.61A32,32,0,0,0,96,128Z"></path>` : `${weight === "fill" ? `<path d="M128,56a72,72,0,1,0,72,72A72.08,72.08,0,0,0,128,56Zm0,104a31.8,31.8,0,0,0,25.61-12.8,8,8,0,1,1,12.79,9.61,48,48,0,1,1,0-57.63,8,8,0,1,1-12.79,9.61A32,32,0,1,0,128,160Zm0-136A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"></path>` : `${weight === "light" ? `<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM94,128a34,34,0,0,0,61.2,20.4,6,6,0,0,1,9.6,7.21,46,46,0,1,1,0-55.22,6,6,0,0,1-9.6,7.21A34,34,0,0,0,94,128Z"></path>` : `${weight === "regular" ? `<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM96,128a32,32,0,0,0,57.6,19.2,8,8,0,0,1,12.8,9.61,48,48,0,1,1,0-57.62,8,8,0,0,1-12.8,9.61A32,32,0,0,0,96,128Z"></path>` : `${weight === "thin" ? `<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm35.2-65.59a44,44,0,1,1,0-52.82,4,4,0,0,1-6.4,4.81,36,36,0,1,0,0,43.2,4,4,0,0,1,6.4,4.81Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const ShoppingCart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["weight", "color", "size", "mirrored"]);
  const { weight: ctxWeight, color: ctxColor, size: ctxSize, mirrored: ctxMirrored, ...restCtx } = getContext("iconCtx") || {};
  let { weight = ctxWeight ?? "regular" } = $$props;
  let { color = ctxColor ?? "currentColor" } = $$props;
  let { size = ctxSize ?? "1em" } = $$props;
  let { mirrored = ctxMirrored || false } = $$props;
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.mirrored === void 0 && $$bindings.mirrored && mirrored !== void 0)
    $$bindings.mirrored(mirrored);
  return `  <svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { fill: escape_attribute_value(color) },
      {
        transform: escape_attribute_value(mirrored ? "scale(-1, 1)" : void 0)
      },
      { viewBox: "0 0 256 256" },
      escape_object(restCtx),
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M225.21,56.31A12,12,0,0,0,216,52H58L53.73,28.42A20,20,0,0,0,34.05,12H16a12,12,0,0,0,0,24H30.71L55.62,173a28,28,0,0,0,4.07,10.21A32,32,0,1,0,115,196h34a32,32,0,1,0,31-24H83.17a4,4,0,0,1-3.93-3.28L76.92,156H188.1a28,28,0,0,0,27.55-23l12.16-66.86A12,12,0,0,0,225.21,56.31ZM92,204a8,8,0,1,1-8-8A8,8,0,0,1,92,204Zm88,8a8,8,0,1,1,8-8A8,8,0,0,1,180,212Zm12-83.28A4,4,0,0,1,188.1,132H72.56L62.38,76H201.62Z"></path>` : `${weight === "duotone" ? `<path d="M216,64l-12.16,66.86A16,16,0,0,1,188.1,144H62.55L48,64Z" opacity="0.2"></path><path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>` : `${weight === "fill" ? `<path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM180,192a12,12,0,1,1-12,12A12,12,0,0,1,180,192Zm-96,0a12,12,0,1,1-12,12A12,12,0,0,1,84,192Z"></path>` : `${weight === "light" ? `<path d="M220.61,60.16A6,6,0,0,0,216,58H53L47.83,29.5A14,14,0,0,0,34.05,18H16a6,6,0,0,0,0,12h18a2,2,0,0,1,2,1.64l25.51,140.3a21.93,21.93,0,0,0,6.24,11.77A26,26,0,1,0,105.89,190h52.22A26,26,0,1,0,180,178H83.17a10,10,0,0,1-9.84-8.21L69.73,150H188.1a22,22,0,0,0,21.65-18.06L221.9,65.07A6,6,0,0,0,220.61,60.16ZM98,204a14,14,0,1,1-14-14A14,14,0,0,1,98,204Zm96,0a14,14,0,1,1-14-14A14,14,0,0,1,194,204Zm3.94-74.21A10,10,0,0,1,188.1,138H67.55L55.19,70H208.81Z"></path>` : `${weight === "regular" ? `<path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>` : `${weight === "thin" ? `<path d="M219.07,61.44A4,4,0,0,0,216,60H51.34L45.86,29.85A12,12,0,0,0,34.05,20H16a4,4,0,0,0,0,8h18A4,4,0,0,1,38,31.28l25.5,140.3A20,20,0,0,0,71,183.85,24,24,0,1,0,101.87,188h60.26A24,24,0,1,0,180,180H83.17a12,12,0,0,1-11.8-9.85l-4-22.15H188.1a20,20,0,0,0,19.68-16.42l12.16-66.86A4,4,0,0,0,219.07,61.44ZM100,204a16,16,0,1,1-16-16A16,16,0,0,1,100,204Zm96,0a16,16,0,1,1-16-16A16,16,0,0,1,196,204Zm3.91-73.85A12,12,0,0,1,188.1,140H65.88L52.79,68H211.21Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const SneakerMove = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["weight", "color", "size", "mirrored"]);
  const { weight: ctxWeight, color: ctxColor, size: ctxSize, mirrored: ctxMirrored, ...restCtx } = getContext("iconCtx") || {};
  let { weight = ctxWeight ?? "regular" } = $$props;
  let { color = ctxColor ?? "currentColor" } = $$props;
  let { size = ctxSize ?? "1em" } = $$props;
  let { mirrored = ctxMirrored || false } = $$props;
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.mirrored === void 0 && $$bindings.mirrored && mirrored !== void 0)
    $$bindings.mirrored(mirrored);
  return `  <svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { fill: escape_attribute_value(color) },
      {
        transform: escape_attribute_value(mirrored ? "scale(-1, 1)" : void 0)
      },
      { viewBox: "0 0 256 256" },
      escape_object(restCtx),
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M212,148a24,24,0,0,1-24-24V95.71a20.14,20.14,0,0,0-18.42-19.93C147.45,74,133.07,60,132.06,39.3a20,20,0,0,0-5.83-13.17L118,17.9a19.91,19.91,0,0,0-27.94-.34l-.22.22-64,64.11a20,20,0,0,0,0,28.28l.13.13L133.25,214.22A19.86,19.86,0,0,0,147.31,220H236a20,20,0,0,0,20-20v-8A44,44,0,0,0,212,148Zm20,48H148.94L45.7,96,103.87,37.7,108.18,42c2.18,30.66,24.27,53.22,55.82,57.3V108H148a12,12,0,1,0,0,24h16.68a47.8,47.8,0,0,0,3.7,12H156a12,12,0,1,0,0,24h36.84A47.69,47.69,0,0,0,212,172a20,20,0,0,1,20,20ZM52,184H28a12,12,0,0,1,0-24H52a12,12,0,0,1,0,24Zm52,24a12,12,0,0,1-12,12H44a12,12,0,1,1,0-24H92A12,12,0,0,1,104,208Z"></path>` : `${weight === "duotone" ? `<path d="M248,192v8a8,8,0,0,1-8,8H147.31a8,8,0,0,1-5.65-2.34l-107.32-104a8,8,0,0,1,0-11.32l64-64.13a8,8,0,0,1,11.17.13l8.23,8.23a8,8,0,0,1,2.32,5.28c1.36,27.59,21.35,45.66,48.66,47.86a8,8,0,0,1,7.27,8V120a40,40,0,0,0,40,40h0A32,32,0,0,1,248,192Z" opacity="0.2"></path><path d="M216,152a32,32,0,0,1-32-32V95.7a16,16,0,0,0-14.63-15.94c-24.35-2-40.18-17.39-41.31-40.27h0A16,16,0,0,0,123.4,29l-8.22-8.23a15.91,15.91,0,0,0-22.35-.27l-.15.14-64,64.12a16,16,0,0,0,0,22.62l.09.09,107.27,104A15.93,15.93,0,0,0,147.31,216H240a16,16,0,0,0,16-16v-8A40,40,0,0,0,216,152Zm24,48H147.31l-.09-.08L40,96l63.87-64,8.21,8.2v0c.76,15.42,6.65,28.85,17,38.83,10,9.6,23.45,15.34,38.88,16.6V112H152a8,8,0,1,0,0,16h16.68a47.64,47.64,0,0,0,5.78,16H160a8,8,0,0,0,0,16h29.51A47.67,47.67,0,0,0,216,168a24,24,0,0,1,24,24ZM64,184H32a8,8,0,0,1,0-16H64a8,8,0,0,1,0,16Zm40,24a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H96A8,8,0,0,1,104,208Z"></path>` : `${weight === "fill" ? `<path d="M256,200.41A15.91,15.91,0,0,1,240,216H147.31a15.93,15.93,0,0,1-11.26-4.63L28.78,107.42l-.09-.09a16,16,0,0,1,0-22.62l64-64.12.15-.14a15.91,15.91,0,0,1,22.35.27L123.4,29a16,16,0,0,1,4.66,10.54h0c1.13,22.83,16.91,38.26,41.19,40.26A16.13,16.13,0,0,1,184,95.7V108a4,4,0,0,1-4,4H152a8,8,0,0,0-8,8.53,8.18,8.18,0,0,0,8.25,7.47h28a4,4,0,0,1,4,3.55,31.31,31.31,0,0,0,1.64,7.14,4,4,0,0,1-3.77,5.3H160a8,8,0,0,0-8,8.53,8.17,8.17,0,0,0,8.25,7.47H216A40,40,0,0,1,256,200.41ZM72,176a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,176Zm24,24H48a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16Z"></path>` : `${weight === "light" ? `<path d="M216,154a34,34,0,0,1-34-34V95.7a14,14,0,0,0-12.79-13.94c-25.05-2-42-18.58-43.14-42.18A14,14,0,0,0,122,30.36l-8.23-8.23a13.92,13.92,0,0,0-19.55-.24,1.14,1.14,0,0,1-.11.11l-64,64.12A14,14,0,0,0,30.17,106L137.41,209.9a13.94,13.94,0,0,0,9.9,4.1H240a14,14,0,0,0,14-14v-8A38,38,0,0,0,216,154Zm26,46a2,2,0,0,1-2,2H147.31a2.08,2.08,0,0,1-1.48-.65L38.59,97.43A2,2,0,0,1,38,96a2,2,0,0,1,.59-1.42l63.93-64a2,2,0,0,1,2.76.07l8.22,8.22a2,2,0,0,1,.58,1.33h0c.73,14.9,6.41,27.86,16.43,37.48,9.68,9.3,22.73,14.85,37.74,16.06a2,2,0,0,1,1.75,2V114H152a6,6,0,1,0,0,12h18.4a45.78,45.78,0,0,0,7.68,20H160a6,6,0,0,0,0,12h30.11A45.78,45.78,0,0,0,216,166a26,26,0,0,1,26,26ZM64,182H32a6,6,0,0,1,0-12H64a6,6,0,0,1,0,12Zm38,26a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12H96A6,6,0,0,1,102,208Z"></path>` : `${weight === "regular" ? `<path d="M104,208a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H96A8,8,0,0,1,104,208ZM72,176a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,176Zm184,16v8a16,16,0,0,1-16,16H147.31a15.93,15.93,0,0,1-11.26-4.63L28.78,107.42l-.09-.09a16,16,0,0,1,0-22.62l64-64.12.15-.14a15.91,15.91,0,0,1,22.35.27L123.4,29a16,16,0,0,1,4.66,10.54c1.13,22.88,17,38.31,41.31,40.27A16,16,0,0,1,184,95.7V120a32,32,0,0,0,32,32A40,40,0,0,1,256,192Zm-16,0a24,24,0,0,0-24-24,47.67,47.67,0,0,1-26.49-8H160a8,8,0,0,1,0-16h14.46a47.64,47.64,0,0,1-5.78-16H152a8,8,0,1,1,0-16h16V95.7c-15.43-1.26-28.88-7-38.88-16.6-10.39-10-16.28-23.41-17-38.83v0L103.87,32,40,96l107.22,103.9.09.08H240Z"></path>` : `${weight === "thin" ? `<path d="M216,156a36,36,0,0,1-36-36V95.69a12,12,0,0,0-10.95-11.94c-26.11-2.11-43.77-19.41-45-44.07a12,12,0,0,0-3.49-7.91l-8.23-8.23a11.93,11.93,0,0,0-16.76-.2l-.07.07-64,64.12a12,12,0,0,0,0,17l107.27,104a11.93,11.93,0,0,0,8.48,3.51H240a12,12,0,0,0,12-12v-8A36,36,0,0,0,216,156Zm28,44a4,4,0,0,1-4,4H147.31a4,4,0,0,1-2.87-1.21L37.17,98.84a4,4,0,0,1,0-5.65l64-64.09a4,4,0,0,1,5.55.1l8.23,8.22a4,4,0,0,1,1.16,2.65c1.42,28.93,22,49.2,52.33,51.65a4,4,0,0,1,3.59,4V116H152a4,4,0,0,0,0,8h20.19a43.84,43.84,0,0,0,9.89,24H160a4,4,0,0,0,0,8h30.75A43.75,43.75,0,0,0,216,164a28,28,0,0,1,28,28ZM64,180H32a4,4,0,1,1,0-8H64a4,4,0,1,1,0,8Zm36,28a4,4,0,0,1-4,4H48a4,4,0,0,1,0-8H96A4,4,0,0,1,100,208Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const ShoeLanding = "/_app/immutable/assets/shoe.D3X2Q6Ye.png";
const shoe1 = "/_app/immutable/assets/shoe_1.DYxQ-AJD.jpg";
const shoe2 = "/_app/immutable/assets/shoe_2.BSmBtxa4.jpg";
const shoe3 = "/_app/immutable/assets/shoe_3.4ESIx11P.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col h-full" data-theme="light"><div class="" data-svelte-h="svelte-1dajzvy"><nav class="navbar border-b-2 border-black "><div class="navbar-start ml-56"><h1 class="text-3xl font-bold">SHOESIFY</h1></div> <div class="navbar-center"></div> <div class="navbar-end gap-8 mr-52"><button class="hover:underline">HOME</button> <button class="hover:underline">SHOP</button> <button class="hover:underline">CONTACT</button> <button class="hover:underline">ACCOUNT</button> <button class="hover:underline">ABOUT</button></div></nav></div> <section class="flex flex-row h-screen"><div class="flex flex-col w-[50%] h-full border-r-2 items-center gap-10 border-black"><div class="flex flex-col w-[80%] h-[50%] mt-12 gap-7"><h1 class="font-bold text-7xl" data-svelte-h="svelte-u19s5m">Be Bold.<br><span class="text-6xl">Walk in style.</span></h1> <p class="text-2xl " data-svelte-h="svelte-16vv5ku">Get shoes that know you from the inside out with our latest comfy collection. Step into comfort and walk in style with us.</p> <button class="btn w-fit bg-black text-white shadow-xl hover:bg-white hover:text-black">Explore our shoes ${validate_component(SneakerMove, "SneakerMove").$$render($$result, { size: 28 }, {}, {})}</button></div> <div class="flex flex-col w-[80%] h-[25%]" data-svelte-h="svelte-ooz9zx"><div class="stats shadow-xl"><div class="stat"><div class="stat-title">Happy Customers</div> <div class="stat-value">350K+</div> <div class="stat-desc">All around the world</div></div> <div class="stat"><div class="stat-title">Sales</div> <div class="stat-value">1M+</div> <div class="stat-desc">Since 2015</div></div> <div class="stat"><div class="stat-title">Collections</div> <div class="stat-value">Over 15+</div> <div class="stat-desc">All stitched to perfection</div></div></div></div></div> <div class="flex w-[50%] justify-center items-center h-full" data-svelte-h="svelte-s6cd9u"><div class="flex w-[99%] h-[99%]"><img${add_attribute("src", ShoeLanding, 0)} alt="shoe"></div></div></section> <section class="flex flex-col h-screen justify-center items-center border-2 border-black"><h1 class="relative left-[-35%] top-5 text-4xl font-bold" data-svelte-h="svelte-1y686ul">Our Trending Picks!</h1> <div class="flex flex-row h-[90%] w-[90%] justify-center items-center gap-10"><div class="card w-96 h-[80%] bg-base-100 shadow-2xl"><figure data-svelte-h="svelte-i553go"><img${add_attribute("src", shoe1, 0)} alt="shoe1"></figure> <div class="card-body gap-4"><h2 class="card-title font-bold" data-svelte-h="svelte-16irzz4">Shoesify Power XL <div class="badge badge-accent">New!</div></h2> <p data-svelte-h="svelte-11nt6z4">Our latest rendition of both power and comfort. These shoes are sure to make you comfy and condident throughout the day.</p> <div class="card-actions justify-end"><button class="btn w-fit bg-black text-white shadow-xl hover:bg-white hover:text-black">Add to cart ${validate_component(ShoppingCart, "ShoppingCart").$$render($$result, { size: 18 }, {}, {})}</button></div></div></div> <div class="card w-96 h-[80%] bg-base-100 shadow-2xl"><figure data-svelte-h="svelte-19v6uxg"><img${add_attribute("src", shoe2, 0)} alt="shoe2"></figure> <div class="card-body gap-4"><h2 class="card-title font-bold" data-svelte-h="svelte-1l30mps">Shoesify Power <div class="badge badge-secondary">Top Seller!</div></h2> <p data-svelte-h="svelte-kkz4jk">Our top selling shoe and for good reason. Can&#39;t beat the price to comfort ratio. Rated as our overall best shoe.</p> <div class="card-actions justify-end"><button class="btn w-fit bg-black text-white shadow-xl hover:bg-white hover:text-black">Add to cart ${validate_component(ShoppingCart, "ShoppingCart").$$render($$result, { size: 18 }, {}, {})}</button></div></div></div> <div class="card w-96 h-[80%] bg-base-100 shadow-2xl"><figure data-svelte-h="svelte-1dt8szw"><img${add_attribute("src", shoe3, 0)} alt="shoe3"></figure> <div class="card-body gap-4"><h2 class="card-title font-bold" data-svelte-h="svelte-8wjeaz">Shoesify Sport</h2> <p data-svelte-h="svelte-19ik596">Great for those power packed athletic days. This shoe has soft soles which use our odour-free technology</p> <div class="card-actions justify-end"><button class="btn w-fit bg-black text-white shadow-xl hover:bg-white hover:text-black">Add to cart ${validate_component(ShoppingCart, "ShoppingCart").$$render($$result, { size: 18 }, {}, {})}</button></div></div></div></div></section> <footer class="flex flex-row justify-evenly p-8"><div class="flex flex-col justify-center"><h1 class="flex flex-row justify-center items-center gap-1 font-bold text-4xl">SHOESIFY ${validate_component(Copyright, "Copyright").$$render($$result, {}, {}, {})}</h1> <p data-svelte-h="svelte-np157a">Step into comfort.</p></div> <div class="" data-svelte-h="svelte-pjxt21"><h1 class="font-semibold text-xl">Links</h1> <p class="hover:underline cursor-pointer">Youtube</p> <p class="hover:underline cursor-pointer">Twitter</p> <p class="hover:underline cursor-pointer">Store</p> <p class="hover:underline cursor-pointer">Legal</p></div> <div class="" data-svelte-h="svelte-q7kosw"><h1 class="font-semibold text-xl">Media</h1> <p class="hover:underline cursor-pointer">Pictures</p> <p class="hover:underline cursor-pointer">Social</p> <p class="hover:underline cursor-pointer">Showroom</p></div></footer> </main>`;
});
export {
  Page as default
};
