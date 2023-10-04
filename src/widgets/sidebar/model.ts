import { createEvent, createStore } from "effector";

export const triggerSidebar = createEvent<boolean>();

export const $store = createStore<boolean>(false).on(triggerSidebar, (state) => !state);
