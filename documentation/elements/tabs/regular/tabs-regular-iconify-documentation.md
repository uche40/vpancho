---
selected: 'team'
---

### Iconify

You can easily embed `Iconify - Unified icons framework` in your tab elements.
The styling is already taken care of, just add the icons you want.
Check the markup for more details.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const selected = ref<'team' | 'projects' | 'tasks'>('team')
</script>

<template>
  <div class="card-inner">
    <div class="tabs-wrapper">
      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[selected === 'team' && 'is-active']">
              <a @click="selected = 'team'">
                <i class="iconify" data-icon="feather:users"></i>
                <span>Team</span>
              </a>
            </li>
            <li :class="[selected === 'projects' && 'is-active']">
              <a @click="selected = 'projects'">
                <i class="iconify" data-icon="feather:box"></i>
                <span>Projects</span></a
              >
            </li>
            <li :class="[selected === 'tasks' && 'is-active']">
              <a @click="selected = 'tasks'">
                <i class="iconify" data-icon="feather:check"></i>
                <span>Tasks</span></a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="tab-content" :class="[selected === 'team' && 'is-active']">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times. Quae diligentissime contra Aristonem dicuntur a
          Chryippo. Duo Reges: constructio interrete.
        </p>
      </div>

      <div
        class="tab-content"
        :class="[selected === 'projects' && 'is-active']"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times. Quae diligentissime contra Aristonem dicuntur a
          Chryippo. Duo Reges: constructio interrete.
        </p>
      </div>

      <div class="tab-content" :class="[selected === 'tasks' && 'is-active']">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times. Quae diligentissime contra Aristonem dicuntur a
          Chryippo. Duo Reges: constructio interrete.
        </p>
      </div>
    </div>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="tabs-inner">
  <div class="tabs">
    <ul>
      <li :class="[frontmatter.selected === 'team' && 'is-active']">
        <a @click="frontmatter.selected = 'team'">
          <i class="iconify" data-icon="feather:users"></i> <span>Team</span></a
        >
      </li>
      <li :class="[frontmatter.selected === 'projects' && 'is-active']">
        <a @click="frontmatter.selected = 'projects'">
          <i class="iconify" data-icon="feather:box"></i> <span>Projects</span></a
        >
      </li>
      <li :class="[frontmatter.selected === 'tasks' && 'is-active']">
        <a @click="frontmatter.selected = 'tasks'">
          <i class="iconify" data-icon="feather:check"></i> <span>Tasks</span></a
        >
      </li>
    </ul>
  </div>
</div>

<div
  class="tab-content"
  :class="[frontmatter.selected === 'team' && 'is-active']"
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
    beatissimum? Ne discipulum abducam, times. Quae
    diligentissime contra Aristonem dicuntur a Chryippo. Duo
    Reges: constructio interrete.
  </p>
</div>

<div
  class="tab-content"
  :class="[frontmatter.selected === 'projects' && 'is-active']"
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
    beatissimum? Ne discipulum abducam, times. Quae
    diligentissime contra Aristonem dicuntur a Chryippo. Duo
    Reges: constructio interrete.
  </p>
</div>

<div
  class="tab-content"
  :class="[frontmatter.selected === 'tasks' && 'is-active']"
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
    beatissimum? Ne discipulum abducam, times. Quae
    diligentissime contra Aristonem dicuntur a Chryippo. Duo
    Reges: constructio interrete.
  </p>
</div>

<!--/example-->