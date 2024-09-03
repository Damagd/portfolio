'use client'

import HeaderProject from "@/app/ui/components/HeaderProject";
import PageLayout from "@/app/ui/layouts/PageLayout";
import { Suspense } from "react";

//import {projects} from './../projects.json';

export default function Layout({children}) {

    return (
        <Suspense fallback={<>loading page...</>}>
            <PageLayout title={'Projects'} description={
                <Suspense fallback={<>loading title...</>}>
                    <HeaderProject></HeaderProject>
                </Suspense>
            }>
                {children}
            </PageLayout>
        </Suspense>
    )
}