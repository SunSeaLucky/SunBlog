<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="./assets/logo.jpg" />
          </div>
          <div
            class="hidden sm:ml-6 sm:flex sm:space-x-8"
            v-for="item in navBarData"
            :key="item.title"
          >
            <router-link :to="item.path" :class="navClass(item.path, 1)">{{
              item.title
            }}</router-link>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div
        class="space-y-1 pb-4 pt-2"
        v-for="item in navBarData"
        :key="item.title"
      >
        <router-link :to="item.path" :class="navClass(item.path, 0)">{{
          item.title
        }}</router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>

  <router-view />
</template>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
#app {
  text-align: center;
}
</style>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const currentPath = computed(() => route.path);

const navClass = (path, pc) => {
  if (pc) {
    return currentPath.value === path
      ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
      : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700";
  } else {
    return currentPath.value === path
      ? "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
      : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700";
  }
};

const navBarData = [
  { title: "首页", path: "/" },
  {
    title: "资源",
    path: "/Resources",
  },
  {
    title: "纪念",
    path: "/MemoryMuseum",
  },
  {
    title: "保研",
    path: "/BecomeCapitalist",
  },
];
</script>
