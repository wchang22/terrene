import React, {
  useMemo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { extend, useFrame, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import { PointerLockControls as PointerLockControlsImpl }
  from 'three/examples/jsm/controls/PointerLockControls';
import * as KeyCode from 'keycode-js';
import PropTypes from 'prop-types';

extend({ PointerLockControlsImpl });

const PointerLockControls = ({ movementSpeed }) => {
  const controls = useRef();
  const { camera, gl: { domElement } } = useThree();
  const clock = useMemo(() => new THREE.Clock(), []);

  const [moveForward, setMoveForward] = useState(false);
  const [moveBack, setMoveBack] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(false);
  const [moveUp, setMoveUp] = useState(false);
  const [moveDown, setMoveDown] = useState(false);

  useFrame(() => {
    if (!controls.current.isLocked) {
      return;
    }

    const delta = clock.getDelta();

    if (moveForward || moveBack) {
      const distance = (Number(moveForward) - Number(moveBack)) * delta * movementSpeed;
      controls.current.moveForward(distance);
    }
    if (moveLeft || moveRight) {
      const distance = (Number(moveRight) - Number(moveLeft)) * delta * movementSpeed;
      controls.current.moveRight(distance);
    }
    if (moveUp || moveDown) {
      const distance = (Number(moveUp) - Number(moveDown)) * delta * movementSpeed;
      camera.position.y += distance;
    }
  });

  const onMouseDown = () => {
    controls.current.lock();
  };

  const onKeyDown = (e) => {
    switch (e.keyCode) {
      case KeyCode.KEY_W:
        setMoveForward(true);
        break;
      case KeyCode.KEY_S:
        setMoveBack(true);
        break;
      case KeyCode.KEY_A:
        setMoveLeft(true);
        break;
      case KeyCode.KEY_D:
        setMoveRight(true);
        break;
      case KeyCode.KEY_SPACE:
        setMoveUp(true);
        break;
      case KeyCode.KEY_SHIFT:
        setMoveDown(true);
        break;
      default:
        break;
    }
  };

  const onKeyUp = (e) => {
    switch (e.keyCode) {
      case KeyCode.KEY_W:
        setMoveForward(false);
        break;
      case KeyCode.KEY_S:
        setMoveBack(false);
        break;
      case KeyCode.KEY_A:
        setMoveLeft(false);
        break;
      case KeyCode.KEY_D:
        setMoveRight(false);
        break;
      case KeyCode.KEY_SPACE:
        setMoveUp(false);
        break;
      case KeyCode.KEY_SHIFT:
        setMoveDown(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    domElement.addEventListener('mousedown', onMouseDown, false);
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);

    return () => {
      domElement.removeEventListener('mousedown', onMouseDown, false);
      document.removeEventListener('keydown', onKeyDown, false);
      document.removeEventListener('keyup', onKeyUp, false);
    };
  }, [domElement]);

  return (
    <pointerLockControlsImpl
      ref={controls}
      args={[camera, domElement]}
    />
  );
};

PointerLockControls.defaultProps = {
  movementSpeed: 5,
};

PointerLockControls.propTypes = {
  movementSpeed: PropTypes.number,
};

export default PointerLockControls;
