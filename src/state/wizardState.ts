import { reactive, ref, computed } from 'vue'
import sleep from '/@src/utils/sleep'

import type { WizardData } from '/@src/models/wizard'

export const currentStep = ref(1)
export const isLoading = ref(false)

export const stepTitle = computed(() => {
  switch (currentStep.value) {
    case 2:
      return 'Project Info'
    case 3:
      return 'Project Details'
    case 4:
      return 'Project Files'
    case 5:
      return 'Team Members'
    case 6:
      return 'Project Tools'
    case 7:
      return 'Preview'
    case 8:
      return 'Finish'
    case 1:
    default:
      return 'Project Type'
  }
})

export async function saveData() {
  isLoading.value = true
  await sleep(2000)
  isLoading.value = false
}

export function resetData() {
  wizardData.name = ''
  wizardData.description = ''
  wizardData.relatedTo = 'UX/Design'
  wizardData.logo = null
  wizardData.timeFrame = {
    start: new Date(),
    end: new Date(),
  }
  wizardData.budget = '< 5K'
  wizardData.attachments = []
  wizardData.teammates = []
  wizardData.tools = []
  wizardData.customer = null
}

export const wizardData = reactive<WizardData>({
  name: '',
  description: '',
  relatedTo: 'UX/Design',
  logo: null,
  timeFrame: ref({
    start: new Date(),
    end: new Date(),
  }),
  budget: '< 5K',
  attachments: [],
  teammates: [],
  tools: [],
  customer: null,
})
