import PostsTable from '@/components/PostsTable.vue'
import Pagination from '@/components/Pagination.vue'
import Form from '@/components/Form.vue'

//routes

export default [
    { path : "/posts" , component: PostsTable },
    { path : "/form" , component: Form },
    { path : "/pagination" , component: Pagination }
]