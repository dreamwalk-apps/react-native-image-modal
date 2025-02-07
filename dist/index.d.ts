import React, { LegacyRef } from 'react';
import type { ResizeMode } from 'react-native-fast-image';
import type { ImageStyle, FastImageProps } from 'react-native-fast-image';
import { OnTap, OnMove } from './types';
import ImageDetail from './ImageDetail';
interface State {
    isOpen: boolean;
    origin: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
interface Props extends FastImageProps {
    isRTL?: boolean;
    renderToHardwareTextureAndroid?: boolean;
    isTranslucent?: boolean;
    swipeToDismiss?: boolean;
    imageBackgroundColor?: string;
    overlayBackgroundColor?: string;
    hideCloseButton?: boolean;
    modalRef?: LegacyRef<ImageDetail>;
    disabled?: boolean;
    modalImageStyle?: ImageStyle;
    modalImageResizeMode?: ResizeMode;
    onLongPressOriginImage?: () => void;
    renderHeader?: (close: () => void) => JSX.Element | Array<JSX.Element>;
    renderFooter?: (close: () => void) => JSX.Element | Array<JSX.Element>;
    onTap?: (eventParams: OnTap) => void;
    onDoubleTap?: () => void;
    onLongPress?: () => void;
    onOpen?: () => void;
    didOpen?: () => void;
    onMove?: (position: OnMove) => void;
    responderRelease?: (vx?: number, scale?: number) => void;
    willClose?: () => void;
    onClose?: () => void;
    source: FastImageProps['source'];
    thumbnailSource?: FastImageProps['source'];
}
export default class ImageModal extends React.Component<Props, State> {
    private _root;
    private _originImageOpacity;
    constructor(props: Props);
    private _setOrigin;
    private _open;
    private _onClose;
    render(): JSX.Element;
}
export { ImageDetail };
//# sourceMappingURL=index.d.ts.map