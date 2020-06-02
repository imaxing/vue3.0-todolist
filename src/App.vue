<template>
  <h1>todo list</h1>
  <h3 v-if="list.length"> 已完成: {{computedData.completed}}</h3>
  <h3 v-if="list.length"> 未完成: {{computedData.unComplete}}</h3>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <p><b>{{index}}</b></p>
      <p :class="{ completed: item.complete }">
         {{item.complete ? '已完成' : '未完成'}}. {{item.value}}
         <button :disabled="item.complete" @click="deleteItem(index)">删除</button>
         <input :disabled="item.complete" type="checkbox" name="" v-model="item.complete">
      </p>
    </li>
  </ul>
  <input v-model="newItem" @keyup.enter="addItem">
  <button @click="addItem" :disabled="newItem === ''">添加</button> <br>
  <button v-if="list.length" :disabled="computedData.randomed" @click="deleteRandom">随机改变数组某一条内容</button>
</template>


<script>
import useTodoList from './useTodoList'
export default {
  setup(context) {
    const todoController = useTodoList([{ value: 'init val', complete: false }])
    return {
      ...todoController
    }
  }
}
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
.completed {
  text-decoration: line-through;
}
</style>
