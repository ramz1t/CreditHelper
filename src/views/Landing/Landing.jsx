import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './Landing.module.css'
import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Landing = () => {
    const { t } = useTranslation()

    useEffect(() => {

        const k = window.innerWidth / 1920
        const scene = new THREE.Scene()
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        const bgColor = isDark ? 0x171717 : 0xFFFFFF
        scene.background = new THREE.Color(bgColor)
        const camera = new THREE.PerspectiveCamera(75, 500 / 400, 0.1, 1000)
        camera.position.set(0, 10 * k, 20 * k)
        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg')
        })
        renderer.setSize(500 * k, 400 * k)

        let pointLight1 = new THREE.PointLight(0xffffff)
        pointLight1.position.set(13 * k, 20 * k, 0)
        scene.add(pointLight1);
        // let lightHelper1 = new THREE.PointLightHelper(pointLight1)
        // scene.add(lightHelper1)


        let pointLight2 = new THREE.PointLight(0xffffff)
        pointLight2.position.set(-13 * k, 20 * k, 0)
        scene.add(pointLight2);
        // let lightHelper2 = new THREE.PointLightHelper(pointLight2)
        // scene.add(lightHelper2)

        const ambientLight = new THREE.AmbientLight(0xffffff, 2)
        scene.add(ambientLight)

        let safe
        const loader = new GLTFLoader()
        loader.load('./models/safe.gltf', (gltf) => {
            safe = gltf.scene
            safe.position.set(-1 * k, 2.5 * k, -10 * k)
            scene.add(safe)
            safe.scale.set(4.4 * k, 4.4 * k, 4.4 * k)
            safe.rotation.y = 300
        })



        const animate = () => {
            if (safe && safe.rotation) {
                safe.rotation.y += 0.0015
            }
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate()
    }, [])

    return (
        <div className={s.container}>
            <div className={s.landing_top}>
                <div className={s.landing__titles}>
                    <h1 className={s.landing_title}>Credit</h1>
                    <h1 className={s.landing_title}>Helper</h1>
                </div>
                <canvas id="bg"></canvas>
            </div>
            <p>{t('main_body')}</p>
        </div>
    )
}

export default Landing