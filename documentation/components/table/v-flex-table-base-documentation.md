### V-FlexTable

Vuero provides a custom table component called `<V-FlexTable />`.
It looks like a table but is not an Html5 table.
Instead, it uses the flexbox technology and is fully responsive.
Check the markup for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
const data = [
  {
    id: 0,
    company: 'Grubspot',
    type: 'New Lead',
    industry: 'Software',
    status: 'Active',
    contacts: [
      {
        id: 0,
        picture: '/images/avatars/photos/25.jpg',
        initials: 'AC',
        color: 'info',
      },
      // and more contacts ..
    ],
  },
  // and more data ...
]
</script>

<template>
  <!--V-FlexTable-->
  <V-FlexTable>
    <template #header>
      <div class="flex-table-header">
        <span>Company</span>
        <span>Type</span>
        <span>Industry</span>
        <span>Status</span>
        <span>Contacts</span>
        <span class="cell-end">Actions</span>
      </div>
    </template>
    <template #body>
      <V-FlexTableRowBase :rows="data" />
    </template>
  </V-FlexTable>

  <!--Table Pagination-->
  <V-FlexPagination
    :item-per-page="10"
    :total-items="873"
    :current-page="42"
    :max-links-displayed="5"
  />
</template>
```

<!--/code-->
