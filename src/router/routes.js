import LoginPage from '@/components/main'
import MainLayout from "@/layout/MainLayout";
import Welcome from "@/view/Welcome";
import ShowLayout from "@/layout/ShowLayout";
import EhenPage from "@/layout/EhenPage";

export const routes = [
  {
    path: '/',
    redirect: '/wel',
    component: MainLayout,
    children: [
      {
        path: 'wel',
        component: Welcome
      },
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: '503',
        component: ShowLayout
      },
      {
        path: 'eh',
        component: EhenPage
      }
    ]
  }
]
