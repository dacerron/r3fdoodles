import Mirror from './Mirror.js'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import { ThinFilmFresnelMap } from '../ThinFilmFresnelMap.js'

function Mirrors({ envMap }) {
  const sideMaterial = useRef();
  const reflectionMaterial = useRef();
  const [thinFilmFresnelMap] = useState(new ThinFilmFresnelMap());

  return (
    <>
      <meshLambertMaterial ref={sideMaterial} map={thinFilmFresnelMap} color={0xaaaaaa} />
      <meshLambertMaterial ref={reflectionMaterial} map={thinFilmFresnelMap} envMap={envMap} />

      {[{position: [0, 0, 0]}].map((mirror, index) => (
        <Mirror
          key={`mirror-${index}`}
          {...mirror}
          sideMaterial={sideMaterial.current}
          reflectionMaterial={reflectionMaterial.current}
        />
      ))}
    </>
  );
}

export default Mirrors;