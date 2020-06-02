import { ref, reactive, computed } from 'vue'

export default function useTodoList(inialValue = []) {
  let newItem = ref('')
  const list = ref(inialValue)
  const addItem = () => {
    if (newItem.value === '') return
    list.value.push({ value: newItem.value, complete: false })
    newItem.value = ''
  }
  const deleteItem = (index) => list.value.splice(index, 1)
  const deleteRandom = () => {
    const rendomNumber = parseInt(Math.random() * list.value.length)
    if (!list.value[rendomNumber].random) {
      list.value[rendomNumber] = {value: rendomNumber + '随机内容', complete: false, random: true}  
    }
  }
  const computedData = computed(() => ({
    completed: list.value.filter(item => item.complete).length,
    unComplete: list.value.filter(item => !item.complete).length,
    randomed: list.value.every(item => item.random)
  }))
  return {
    computedData,
    deleteRandom,
    newItem,
    deleteItem,
    addItem,
    list
  }
}