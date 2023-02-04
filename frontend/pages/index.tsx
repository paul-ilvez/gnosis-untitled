import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import {ElementList, SafeElement} from "@/components";
import {Button, Col, Container, Grid, Row, Spacer, Text} from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Grid justify={'center'} css={{w:'440px', 'text-align': 'center', mt: '30px'}}>
        <Text h2>Welcome to the Safe</Text>
        <Text>The most trusted decentralized custody protocol and collective asset management platform.</Text>

        <Spacer y={1}></Spacer>
        <Button color="primary" css={{w: '250px'}}>Create Safe</Button>
        <Spacer y={1}></Spacer>
        <Button color="secondary" css={{w: '250px'}}>Add existing Safe</Button>
        <Spacer y={1}></Spacer>

        <ElementList bgColor="#EFEFEF" title="My Safes">
          <SafeElement
            safe={{
              avatar: "/avatar-1.png",
              balance: 100,
              chain: 'Ethereum',
              address: '0xA01f...AA6A',
              countOwners: 4,
              countVoices: 2,
              symbol: 'eth'
            }}
          />
        </ElementList>

      </Grid>
    </Layout>
  )
}
