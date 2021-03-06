### Medium stack

Huro avatars can be stacked in an slighlty overlaping line.
Use the `<V-AvatarStack />` component. The component takes 2 props:
`avatars` and `size`. Available sizes are normal, `small` and `medium`.

<!--code-->

```vue
<script setup lang="ts">
const users = [
  {
    id: 0,
    picture: '/images/avatars/photos/7.jpg',
    initials: 'AC',
    color: 'info',
  },
  {
    id: 1,
    picture: null,
    initials: 'JP',
    color: 'info',
  },
  //etc...
]
</script>

<template>
  <V-AvatarStack :avatars="users" size="medium" />
</template>
```

<!--/code-->

<!--example-->
<div class="avatar-stack">
    <V-Avatar picture="/images/avatars/photos/7.jpg" size="medium" />
    <V-Avatar initials="JO" color="info" size="medium" />
    <V-Avatar picture="/images/avatars/photos/8.jpg" size="medium" />
    <V-Avatar picture="/images/avatars/photos/5.jpg" size="medium" />
    <V-Avatar initials="CP" color="success" size="medium" />
    <V-Avatar picture="/images/avatars/photos/5.jpg" size="medium" />
    <div class="v-avatar is-medium">
        <span class="avatar is-more">
            <span class="inner">
                <span>+2</span>
            </span>
        </span>
    </div>
</div>

<!--/example-->
