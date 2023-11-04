<script setup lang="ts">
import projectsRaw from '../data/projects.json'

function sortProjectsCompareFn(a: Project, b: Project) {
  return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0
}

function getChunkedProjects(input: Project[], chunkSize: number): Project[][] {
  let chunks: Project[][] = []

  for (let i = 0; i < input.length; i += chunkSize) {
    chunks.push(input.slice(i, i + chunkSize))
  }

  return chunks
}

const projects: Project[] = projectsRaw.sort(sortProjectsCompareFn)
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-1 divide-y md:hidden">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </div>

    <div class="hidden divide-y md:block">
      <div
        v-for="(chunk, i) in getChunkedProjects(projects, 2)"
        :key="i"
        class="flex flex-row justify-evenly divide-x"
      >
        <ProjectCard
          v-for="project in chunk"
          :key="project.name"
          :project="project"
          classes="flex-1"
        />

        <div v-if="chunk.length === 1" class="flex-1 p-4" />
      </div>
    </div>
  </div>
</template>
