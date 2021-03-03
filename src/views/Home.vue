<template>
  <div class="home">
    <h2>国际化翻译</h2>
    <p>{{ $t("name") }}</p>
    <p>{{ $t("info.age") }}</p>
    <p>
      <button @click="changeType('zh')">切换中文</button>
      <button @click="changeType('en')">切换英文</button>
      <button @click="changeType('id')">切换印尼文</button>
      <button @click="changeType('th')">切换泰文</button>
    </p>
    <hr />
    <el-table :data="tableData"
      border
      row-key="id"
      align="left">
     <el-table-column v-for="(item, index) in col"
        :key="`col_${index}`"
        :prop="dropCol[index].prop"
        :label="item.label"> 
      </el-table-column>
    </el-table>
    <pre style="text-align: left">
      {{dropCol}}
    </pre>
    <hr>
    <pre style="text-align: left">
      {{tableData}}
    </pre>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Sortable from 'sortablejs'
export default {
  name: "home",
  data() {
    return {
      src:require("@/assets/logo.png"),
      col: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      dropCol: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      tableData: [
        {
          id: '1',
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 100 弄'
        },
        {
          id: '2',
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 200 弄'
        },
        {
          id: '3',
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 300 弄'
        },
        {
          id: '4',
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 400 弄'
        }
      ]
    }
  },
  components: {},
  mounted() {
  // 阻止默认行为
	document.body.ondrop = function (event) {
             event.preventDefault();
             event.stopPropagation();
     };
    this.rowDrop()
    this.columnDrop()
  },
  methods: {
    changeType(type) {
      // 此处做了语言选择记录
      localStorage.setItem("local", type);
      // 修改显示语言
      this.$i18n.locale = type;
    },
    dataURLtoFile(dataurl) {
      var arr = dataurl.split(',')
      let mime = arr[0].match(/:(.*?);/)[1]
      // const bstr = window.atob(arr[1])
      // let n = bstr.length
      // let u8arr = new Uint8Array(n)
      // while (n--) {
	    //   u8arr[n] = bstr.charCodeAt(n);
      // }
      console.log(mime)
      // return new File([u8arr], filename, { type: mime })
    },
    // dataURLtoFile(dataurl, filename) { 
	  //   var arr = dataurl.split(','),
	  //       mime = arr[0].match(/:(.*?);/)[1],
	  //       bstr = atob(arr[1]),
	  //       n = bstr.length,
	  //       u8arr = new Uint8Array(n);
	  //   while (n--) {
	  //       u8arr[n] = bstr.charCodeAt(n);
	  //   }
	  //   return new File([u8arr], filename, { type: mime });
	  // },
    handleImg() {
      var arr = this.src.split(',')
      console.log(arr)
      var mime = arr[0].match(/:(.*?);/)[1]
      window.atob(arr[0])
      console.log(window.atob(arr[0])/length)
      let n = window.atob(arr[0]).length
      let u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = window.atob(arr[0]).charCodeAt(n)
      }
      // this.dataURLtoFile(this.src, upload_file)
      console.log(new File([u8arr], { type: mime }))
    },
    //行拖拽
    rowDrop() {
      const tbody = document.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0]
          _this.tableData.splice(newIndex, 0, currRow)
        }
      })
    },
    //列拖拽
    columnDrop() {
      const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          console.log(evt.oldIndex)
          console.log(evt.newIndex)
          const oldItem = this.dropCol[evt.oldIndex]
          console.log(oldItem)
          this.dropCol.splice(evt.oldIndex, 1)
          this.dropCol.splice(evt.newIndex, 0, oldItem)
        }
      })
    }
  }
};
</script>
<style scoped>
.home {
  float: left;
  width: 80%;
  height: 100%;
}
</style>
