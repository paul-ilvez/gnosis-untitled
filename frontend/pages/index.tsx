import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import {ElementList, SafeElement} from "@/components";
import {Container} from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <Layout>
          <ElementList bgColor="#EFEFEF" title="My Safes">
            <SafeElement avatar="/avatar-1.png" />
            <SafeElement avatar="/avatar-2.png" />
          </ElementList>
      </Layout>
  )
}
