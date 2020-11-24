<template>
  <div>
    <q-btn flat fab-mini color="white" label="login" class="q-mr-sm q-mb-xs" to="/auth" />
    <q-btn flat fab-mini color="white" class="q-mr-sm">
      <q-icon clickable size="2rem" name="supervisor_account" />
      <q-icon class="log-down-arrow" size="2rem" name="arrow_drop_down" />
      <q-menu auto-close content-class="text-negative">
        <q-list style="min-width: 100px">
          <q-item clickable>
            <q-item-section>
              <q-btn
                class=""
                flat
                fab-mini
                icon="account_circle"
                label="Profile"
              />
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Recent tabs</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Downloads</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Settings</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>
