import { Reflector } from '@react-three/drei'

export const Plane = () => {
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
      position={[-1, -0.5, 2]}>
      <Reflector resolution={2048} args={[10, 10]} mirror={1} mixStrength={0.8} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        {(Material, props) => <Material color="#a0a0a0" metalness={0.5} normalScale={[1, 1]} {...props} />}
      </Reflector>
    </mesh >
  )
}

