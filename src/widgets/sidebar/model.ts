import { createEvent, createStore } from "effector";

export const triggerSidebar = createEvent<boolean>();

export const $store = createStore<boolean>(true).on(triggerSidebar, (state) => !state);
