<template>
  <div class="relative mt-1 mx-auto max-w-7xl">
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <li
        v-for="tool in tools"
        :key="tool.email"
        class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
      >
        <div class="flex flex-1 flex-col p-8">
          <h3 class="mt-6 text-sm font-medium text-gray-900">
            {{ tool.name }}
          </h3>
          <dl class="mt-1 flex flex-grow flex-col justify-between">
            <dt class="sr-only">Title</dt>
            <dd class="text-sm text-gray-500">{{ tool.description }}</dd>
            <dt class="sr-only">Role</dt>
          </dl>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1">
              <router-link
                :to="tool.url"
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >使用</router-link
              >
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a
                href="#"
                class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                收藏
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/20/solid";

const tools = [
  {
    name: "数学建模",
    description: "正在开发中....",
    url: "/Resources/MathematicsModeling",
  },
  {
    name: "跑步",
    description: "以一种更优雅的方式跑步",
    role: "Admin",
    url: "/Resources/RunAssistant",
  },
];

const navigation = [
  { name: "数学建模", href: "/Resources/MathematicsModeling", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Documents", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
</script>