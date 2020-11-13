import LoginPage from '@/components/main'
import MainLayout from "@/layout/MainLayout";
import ShowLayout from "@/layout/ShowLayout";

export const routes = [
  {
    path: '/',
    redirect: '/login',
    component: MainLayout,
    children: [
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: '503',
        component: ShowLayout
      }
    ]
  }
]