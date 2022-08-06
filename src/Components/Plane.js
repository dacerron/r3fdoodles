import { useEffect } from 'react'
import * as THREE from 'three'
import { useThree, useFrame } from '@react-three/fiber'
import { Reflector } from '@react-three/drei'


let cubeGeom, mirrorCubeCamera, mirrorCubeMaterial, mirrorCube, cubeRenderTarget
export const Plane = () => {
  const { scene, gl } = useThree()
  /*
  useEffect(() => {
    cubeRenderTarget = new THREE.WebGLCubeRenderTarget(1024, { format: THREE.RGBFormat, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter })
    cubeGeom = new THREE.BoxGeometry(10, 0.1, 60);
    mirrorCubeCamera = new THREE.CubeCamera(0.1, 5000, cubeRenderTarget);
    // mirrorCubeCamera.renderTarget.minFilter = THREE.LinearMipMapLinearFilter;
    scene.add(mirrorCubeCamera);
    mirrorCubeMaterial = new THREE.MeshBasicMaterial({ envMap: cubeRenderTarget.texture });
    mirrorCube = new THREE.Mesh(cubeGeom, mirrorCubeMaterial);
    mirrorCube.position.set(0, -4, 0);
    mirrorCubeCamera.position.set(mirrorCube.position.x, mirrorCube.position.y, mirrorCube.position.z);
    scene.add(mirrorCube);
  }, [])

  useFrame(() => {
    if (mirrorCube) {
      console.log('updating cube')
      mirrorCube.visible = false;
      mirrorCubeCamera.updateCubeMap(gl, scene)
      mirrorCube.visible = true;
    }
  })*/
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.5, 0]}
      receiveShadow>
      <Reflector
        args={[256, 256]} // PlaneBufferGeometry arguments
        resolution={2048} // Off-buffer resolution, lower=faster, higher=better quality
        mirror={1} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        mixBlur={0.75} // How much blur mixes with surface roughness (default = 0), note that this can affect performance
        mixStrength={0.5} // Strength of the reflections
        depthScale={0.5} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        distortion={0.5} // Amount of distortion based on the distortionMap texture
        debug={2} /* Depending on the assigned value, one of the following channels is shown:
    0 = no debug
    1 = depth channel
    2 = base channel
    3 = distortion channel
    4 = lod channel (based on the roughness)
  */
      >
        {(Material, props) => <Material {...props} />}
      </Reflector>
    </mesh>
  )
}

