<script setup lang="ts">
import { contributors } from '../data/contributors'
</script>

<template>
  <Contributor
    v-for="c in contributors"
    :user-name="c.userName"
    :uid="c.uid"
    :contribution="c.contribution"
    :is-team-member="c.isTeamMember"
  />
</template>