import { writable } from 'svelte/store';

export const sidebarVisible = writable(false);

// Function to toggle the dark mode
export function toggleSidebar() {
    sidebarVisible.update(value => !value);
}