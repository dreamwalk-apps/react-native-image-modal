var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import { Animated, View, TouchableOpacity, StatusBar, Platform, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import ImageDetail from './ImageDetail';
var ImageModal = (function (_super) {
    __extends(ImageModal, _super);
    function ImageModal(props) {
        var _this = _super.call(this, props) || this;
        _this._root = null;
        _this._originImageOpacity = new Animated.Value(1);
        _this._setOrigin = function () {
            if (_this._root) {
                _this._root.measureInWindow(function (x, y, width, height) {
                    var _a = _this.props, isTranslucent = _a.isTranslucent, onOpen = _a.onOpen, isRTL = _a.isRTL;
                    var newY = y;
                    if (typeof onOpen === 'function') {
                        onOpen();
                    }
                    if (isTranslucent) {
                        newY += StatusBar.currentHeight ? StatusBar.currentHeight : 0;
                        StatusBar.setHidden(true);
                    }
                    var newX = x;
                    if (isRTL) {
                        newX = Dimensions.get('window').width - width - x;
                    }
                    _this.setState({
                        origin: {
                            width: width,
                            height: height,
                            x: newX,
                            y: newY,
                        },
                    });
                });
            }
        };
        _this._open = function () {
            if (_this.props.disabled)
                return;
            _this._setOrigin();
            setTimeout(function () {
                _this.setState({
                    isOpen: true,
                });
            });
            _this._root && _this._originImageOpacity.setValue(0);
        };
        _this._onClose = function () {
            var onClose = _this.props.onClose;
            _this._originImageOpacity.setValue(1);
            setTimeout(function () {
                _this.setState({
                    isOpen: false,
                });
                if (typeof onClose === 'function') {
                    onClose();
                }
            });
        };
        var isTranslucent = props.isTranslucent;
        if (Platform.OS === 'android' && isTranslucent) {
            StatusBar.setTranslucent(isTranslucent);
        }
        _this.state = {
            isOpen: false,
            origin: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
        };
        Dimensions.addEventListener('change', function () {
            setTimeout(function () {
                _this._setOrigin();
            }, 100);
        });
        return _this;
    }
    ImageModal.prototype.render = function () {
        var _this = this;
        var _a = this.props, source = _a.source, resizeMode = _a.resizeMode, renderToHardwareTextureAndroid = _a.renderToHardwareTextureAndroid, isTranslucent = _a.isTranslucent, _b = _a.swipeToDismiss, swipeToDismiss = _b === void 0 ? true : _b, imageBackgroundColor = _a.imageBackgroundColor, overlayBackgroundColor = _a.overlayBackgroundColor, hideCloseButton = _a.hideCloseButton, modalRef = _a.modalRef, modalImageStyle = _a.modalImageStyle, modalImageResizeMode = _a.modalImageResizeMode, onLongPressOriginImage = _a.onLongPressOriginImage, renderHeader = _a.renderHeader, renderFooter = _a.renderFooter, onTap = _a.onTap, onDoubleTap = _a.onDoubleTap, onLongPress = _a.onLongPress, didOpen = _a.didOpen, onMove = _a.onMove, responderRelease = _a.responderRelease, willClose = _a.willClose;
        var _c = this.state, isOpen = _c.isOpen, origin = _c.origin;
        return (<View ref={function (component) {
                _this._root = component;
            }} onLayout={function () {
                _this._setOrigin();
            }} style={[{ alignSelf: 'baseline', backgroundColor: imageBackgroundColor }]}>
        <Animated.View renderToHardwareTextureAndroid={renderToHardwareTextureAndroid === false ? false : true} style={{ opacity: this._originImageOpacity }}>
          <TouchableOpacity activeOpacity={1} style={{ alignSelf: 'baseline' }} onPress={this._open} onLongPress={onLongPressOriginImage}>
            <FastImage {...this.props} source={this.props.thumbnailSource || this.props.source}/>
          </TouchableOpacity>
        </Animated.View>
        <ImageDetail ref={modalRef} renderToHardwareTextureAndroid={renderToHardwareTextureAndroid} isTranslucent={isTranslucent} isOpen={isOpen} origin={origin} source={source} resizeMode={modalImageResizeMode || resizeMode} backgroundColor={overlayBackgroundColor} swipeToDismiss={swipeToDismiss} hideCloseButton={hideCloseButton} imageStyle={modalImageStyle} renderHeader={renderHeader} renderFooter={renderFooter} onTap={onTap} onDoubleTap={onDoubleTap} onLongPress={onLongPress} didOpen={didOpen} onMove={onMove} responderRelease={responderRelease} willClose={willClose} onClose={this._onClose}/>
      </View>);
    };
    return ImageModal;
}(React.Component));
export default ImageModal;
export { ImageDetail };
//# sourceMappingURL=index.js.map