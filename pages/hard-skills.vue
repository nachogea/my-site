<script setup>
const skills = {
  technical: {
    title: "Technical Skills",
    icon: "code",
    items: [
      { name: "Clean & Scalable Code", level: "expert" },
      { name: "OOP & Functional Programming", level: "expert" },
      { name: "MVC Architecture", level: "expert" },
      { name: "CI/CD Pipelines", level: "experienced" },
      { name: "Production Monitoring", level: "experienced" },
      { name: "Containerization", level: "experienced" },
    ]
  },
  tools: {
    title: "Tools & Infrastructure",
    icon: "wrench",
    items: [
      { name: "Git / GitHub / GitLab", level: "expert" },
      { name: "VS Code / RubyMine", level: "expert" },
      { name: "Docker", level: "experienced" },
      { name: "Kubernetes", level: "intermediate" },
      { name: "AWS", level: "experienced" },
      { name: "Sentry & Datadog", level: "experienced" },
      { name: "Figma", level: "intermediate" },
    ]
  },
  languages: {
    title: "Languages",
    icon: "language",
    items: [
      { name: "JavaScript / TypeScript", level: "expert" },
      { name: "Ruby", level: "expert" },
      { name: "Python", level: "intermediate" },
      { name: "Java", level: "intermediate" },
      { name: "Elixir", level: "learning" },
    ]
  },
  frameworks: {
    title: "Frameworks",
    icon: "stack",
    items: [
      { name: "Ruby on Rails", level: "expert" },
      { name: "Vue.js / Nuxt.js", level: "expert" },
      { name: "React / Next.js", level: "intermediate" },
      { name: "Express.js", level: "intermediate" },
    ]
  }
}

const levelColors = {
  expert: "badge-primary",
  experienced: "badge-secondary",
  intermediate: "badge-accent",
  learning: "badge-ghost"
}

const levelLabels = {
  expert: "Expert",
  experienced: "Experienced",
  intermediate: "Intermediate",
  learning: "Learning"
}

const softSkills = [
  { icon: "💬", title: "Communication", description: "Clear, concise, and frequent communication" },
  { icon: "🎯", title: "Ownership", description: "Strong sense of responsibility for my work" },
  { icon: "📝", title: "Documentation", description: "Technical and non-technical writing" },
  { icon: "🤝", title: "Teamwork", description: "Collaboration over individual heroics" },
  { icon: "🌱", title: "Mentorship", description: "Helping others grow and succeed" },
  { icon: "🔄", title: "Agile", description: "Iterative development and adaptation" },
  { icon: "⏰", title: "Time Management", description: "Prioritization and efficient delivery" },
  { icon: "📚", title: "Continuous Learning", description: "Always improving and staying current" },
  { icon: "🎨", title: "Design Collaboration", description: "Effective work with UI/UX designers" },
]

useHead({
  title: 'Skills - Ignacio Gea'
})
</script>

<template>
  <div class="w-full max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Skills</h1>
      <p class="text-base-content/70">
        Technical expertise and tools I work with daily.
      </p>
    </div>

    <!-- Legend -->
    <div class="flex flex-wrap gap-2 mb-8 p-4 bg-base-200 rounded-lg">
      <span class="text-sm text-base-content/60 mr-2">Proficiency:</span>
      <span v-for="(color, level) in levelColors" :key="level" class="badge" :class="color">
        {{ levelLabels[level] }}
      </span>
    </div>

    <!-- Skills Grid -->
    <div class="grid gap-6 md:grid-cols-2">
      <div
        v-for="(category, key) in skills"
        :key="key"
        class="card bg-base-200"
      >
        <div class="card-body">
          <h2 class="card-title font-mono text-lg">
            <span class="text-accent">//</span> {{ category.title }}
          </h2>
          <ul class="space-y-2 mt-2">
            <li
              v-for="item in category.items"
              :key="item.name"
              class="flex justify-between items-center"
            >
              <span class="font-mono text-sm">{{ item.name }}</span>
              <span class="badge badge-sm" :class="levelColors[item.level]">
                {{ levelLabels[item.level] }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Soft Skills Section -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold mb-6">Soft Skills</h2>
      
      <div class="grid gap-4 md:grid-cols-3">
        <div
          v-for="skill in softSkills"
          :key="skill.title"
          class="card bg-base-200 hover:bg-base-300 transition-colors"
        >
          <div class="card-body p-4">
            <div class="text-2xl mb-2">{{ skill.icon }}</div>
            <h3 class="font-bold text-sm">{{ skill.title }}</h3>
            <p class="text-xs text-base-content/60">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
