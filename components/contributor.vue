<script setup lang="ts">
defineProps<{
  userName: string
  uid: string
  contribution?: string
  isTeamMember?: boolean
}>()
</script>

<template>
  <a 
    :href="`https://github.com/${userName}`"
    class="flex items-center mt4 mb2 border-b-none!" 
    :class="[
      isTeamMember ? 'mr6' : 'mr2',
      isTeamMember ? 'team-member' : 'contributor'
    ]"
  >
    <img class="w-32px h-32px rounded-full mr-2" :src="`https://avatars.githubusercontent.com/u/${uid}?v=4`" />
    <div v-if="isTeamMember" class="flex flex-col">
      <span class="font-bold w-fit">
        <code>@{{ userName }}</code>
    </span>
      <span v-if="contribution" class="text-coolgray-400/80 text-3">
        {{ contribute }}
      </span>
    </div>
  </a>
</template>

<style>
.team-member:last-of-type {
  margin-right: 1rem !important;
}
</style>
