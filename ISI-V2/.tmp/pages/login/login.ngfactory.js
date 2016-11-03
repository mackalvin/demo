/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './login';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/components/alert/alert';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from 'ionic-angular/components/content/content';
import * as import13 from '@angular/forms/src/directives/ng_form';
import * as import14 from '@angular/forms/src/directives/ng_control_status';
import * as import15 from 'ionic-angular/components/list/list';
import * as import16 from 'ionic-angular/components/item/item';
import * as import17 from '@angular/core/src/linker/query_list';
import * as import18 from 'ionic-angular/components/label/label';
import * as import19 from 'ionic-angular/components/input/input';
import * as import20 from 'ionic-angular/components/button/button';
import * as import21 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import22 from 'ionic-angular/config/config';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from 'ionic-angular/util/keyboard';
import * as import26 from '@angular/core/src/zone/ng_zone';
import * as import27 from 'ionic-angular/navigation/view-controller';
import * as import28 from 'ionic-angular/components/tabs/tabs';
import * as import29 from 'ionic-angular/gestures/gesture-controller';
import * as import30 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import31 from 'ionic-angular/util/form';
import * as import32 from '../../node_modules/ionic-angular/components/input/input.ngfactory';
import * as import33 from 'ionic-angular/platform/platform';
import * as import34 from '@angular/forms/src/directives/ng_control';
import * as import35 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import36 from '@angular/forms/src/directives/control_container';
var renderType_LoginPage_Host = null;
var _View_LoginPage_Host0 = (function (_super) {
    __extends(_View_LoginPage_Host0, _super);
    function _View_LoginPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LoginPage_Host0, renderType_LoginPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LoginPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-login', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_LoginPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._LoginPage_0_4 = new import3.LoginPage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.AlertController));
        this._appEl_0.initComponent(this._LoginPage_0_4, [], compView_0);
        compView_0.create(this._LoginPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_LoginPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.LoginPage) && (0 === requestNodeIndex))) {
            return this._LoginPage_0_4;
        }
        return notFoundResult;
    };
    return _View_LoginPage_Host0;
}(import1.AppView));
function viewFactory_LoginPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LoginPage_Host === null)) {
        (renderType_LoginPage_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_LoginPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var LoginPageNgFactory = new import11.ComponentFactory('page-login', viewFactory_LoginPage_Host0, import3.LoginPage);
var styles_LoginPage = [];
var renderType_LoginPage = null;
var _View_LoginPage0 = (function (_super) {
    __extends(_View_LoginPage0, _super);
    function _View_LoginPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LoginPage0, renderType_LoginPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LoginPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'padding page-parent');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import21.viewFactory_Content0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Content_0_4 = new import12.Content(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import24.App), this.parentInjector.get(import25.Keyboard), this.parentInjector.get(import26.NgZone), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import28.Tabs, null));
        this._appEl_0.initComponent(this._Content_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n  ', null);
        this._el_2 = this.renderer.createElement(null, 'div', null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'img', null);
        this.renderer.setElementAttribute(this._el_4, 'src', 'assets/img/isi_logo.png');
        this._text_5 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        this._el_7 = this.renderer.createElement(null, 'form', null);
        this.renderer.setElementAttribute(this._el_7, 'name', 'signinForm');
        this.renderer.setElementAttribute(this._el_7, 'ng-submit', 'view.signIn(signinForm)');
        this.renderer.setElementAttribute(this._el_7, 'novalidate', '');
        this._NgForm_7_3 = new import13.NgForm(null, null);
        this._ControlContainer_7_4 = this._NgForm_7_3;
        this._NgControlStatusGroup_7_5 = new import14.NgControlStatusGroup(this._ControlContainer_7_4);
        this._text_8 = this.renderer.createText(this._el_7, '\n    \n    ', null);
        this._el_9 = this.renderer.createElement(this._el_7, 'ion-list', null);
        this._List_9_3 = new import15.List(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import29.GestureController));
        this._text_10 = this.renderer.createText(this._el_9, '\n    \n      ', null);
        this._el_11 = this.renderer.createElement(this._el_9, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_11, 'class', 'textbox-background mob-content-center item item-block');
        this._appEl_11 = new import2.AppElement(11, 9, this, this._el_11);
        var compView_11 = import30.viewFactory_Item0(this.viewUtils, this.injector(11), this._appEl_11);
        this._Item_11_4 = new import16.Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_11), this.renderer);
        this._ItemContent_11_5 = new import16.ItemContent();
        this._query_Label_11_0 = new import17.QueryList();
        this._query_Button_11_1 = new import17.QueryList();
        this._query_Icon_11_2 = new import17.QueryList();
        this._appEl_11.initComponent(this._Item_11_4, [], compView_11);
        this._text_12 = this.renderer.createText(null, '\n        ', null);
        this._el_13 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_13, 'floating', '');
        this._Label_13_3 = new import18.Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_13), this.renderer, '', null, null, null);
        this._text_14 = this.renderer.createText(this._el_13, 'Username', null);
        this._text_15 = this.renderer.createText(null, '\n        ', null);
        this._el_16 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_16, 'name', 'username');
        this.renderer.setElementAttribute(this._el_16, 'ng-maxlength', '25');
        this.renderer.setElementAttribute(this._el_16, 'ng-minlength', '5');
        this.renderer.setElementAttribute(this._el_16, 'ng-model', 'view.username');
        this.renderer.setElementAttribute(this._el_16, 'required', '');
        this.renderer.setElementAttribute(this._el_16, 'type', 'text');
        this._appEl_16 = new import2.AppElement(16, 11, this, this._el_16);
        var compView_16 = import32.viewFactory_TextInput0(this.viewUtils, this.injector(16), this._appEl_16);
        this._TextInput_16_4 = new import19.TextInput(this.parentInjector.get(import22.Config), this.parentInjector.get(import31.Form), this._Item_11_4, this.parentInjector.get(import24.App), this.parentInjector.get(import33.Platform), new import23.ElementRef(this._el_16), this.renderer, this._Content_0_4, this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import34.NgControl, null));
        this._appEl_16.initComponent(this._TextInput_16_4, [], compView_16);
        this._text_17 = this.renderer.createText(null, '\n        ', null);
        compView_16.create(this._TextInput_16_4, [], null);
        this._text_18 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_11_0.reset([this._Label_13_3]);
        this._Item_11_4.contentLabel = this._query_Label_11_0.first;
        compView_11.create(this._Item_11_4, [
            [],
            [].concat([this._el_13]),
            [].concat([
                this._text_12,
                this._text_15,
                this._text_18
            ]),
            [].concat([this._el_16]),
            []
        ], null);
        this._text_19 = this.renderer.createText(this._el_9, '\n      \n      ', null);
        this._el_20 = this.renderer.createElement(this._el_9, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_20, 'class', 'textbox-background mob-content-center item item-block');
        this._appEl_20 = new import2.AppElement(20, 9, this, this._el_20);
        var compView_20 = import30.viewFactory_Item0(this.viewUtils, this.injector(20), this._appEl_20);
        this._Item_20_4 = new import16.Item(this.parentInjector.get(import31.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_20), this.renderer);
        this._ItemContent_20_5 = new import16.ItemContent();
        this._query_Label_20_0 = new import17.QueryList();
        this._query_Button_20_1 = new import17.QueryList();
        this._query_Icon_20_2 = new import17.QueryList();
        this._appEl_20.initComponent(this._Item_20_4, [], compView_20);
        this._text_21 = this.renderer.createText(null, '\n        ', null);
        this._el_22 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_22, 'floating', '');
        this._Label_22_3 = new import18.Label(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_22), this.renderer, '', null, null, null);
        this._text_23 = this.renderer.createText(this._el_22, 'Password', null);
        this._text_24 = this.renderer.createText(null, '\n        ', null);
        this._el_25 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_25, 'name', 'password');
        this.renderer.setElementAttribute(this._el_25, 'ng-maxlength', '25');
        this.renderer.setElementAttribute(this._el_25, 'ng-minlength', '5');
        this.renderer.setElementAttribute(this._el_25, 'ng-model', 'view.password');
        this.renderer.setElementAttribute(this._el_25, 'required', '');
        this.renderer.setElementAttribute(this._el_25, 'type', 'password');
        this._appEl_25 = new import2.AppElement(25, 20, this, this._el_25);
        var compView_25 = import32.viewFactory_TextInput0(this.viewUtils, this.injector(25), this._appEl_25);
        this._TextInput_25_4 = new import19.TextInput(this.parentInjector.get(import22.Config), this.parentInjector.get(import31.Form), this._Item_20_4, this.parentInjector.get(import24.App), this.parentInjector.get(import33.Platform), new import23.ElementRef(this._el_25), this.renderer, this._Content_0_4, this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import34.NgControl, null));
        this._appEl_25.initComponent(this._TextInput_25_4, [], compView_25);
        this._text_26 = this.renderer.createText(null, '\n        ', null);
        compView_25.create(this._TextInput_25_4, [], null);
        this._text_27 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_20_0.reset([this._Label_22_3]);
        this._Item_20_4.contentLabel = this._query_Label_20_0.first;
        compView_20.create(this._Item_20_4, [
            [],
            [].concat([this._el_22]),
            [].concat([
                this._text_21,
                this._text_24,
                this._text_27
            ]),
            [].concat([this._el_25]),
            []
        ], null);
        this._text_28 = this.renderer.createText(this._el_9, '\n    \n    ', null);
        this._text_29 = this.renderer.createText(this._el_7, '\n      \n     ', null);
        this._el_30 = this.renderer.createElement(this._el_7, 'p', null);
        this.renderer.setElementAttribute(this._el_30, 'class', 'align-center');
        this._text_31 = this.renderer.createText(this._el_30, '\n        ', null);
        this._el_32 = this.renderer.createElement(this._el_30, 'button', null);
        this.renderer.setElementAttribute(this._el_32, 'class', 'button-background');
        this.renderer.setElementAttribute(this._el_32, 'ion-button', '');
        this._appEl_32 = new import2.AppElement(32, 30, this, this._el_32);
        var compView_32 = import35.viewFactory_Button0(this.viewUtils, this.injector(32), this._appEl_32);
        this._Button_32_4 = new import20.Button(null, '', this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_32), this.renderer);
        this._appEl_32.initComponent(this._Button_32_4, [], compView_32);
        this._text_33 = this.renderer.createText(null, 'Sign In', null);
        compView_32.create(this._Button_32_4, [[].concat([this._text_33])], null);
        this._text_34 = this.renderer.createText(this._el_30, '\n     ', null);
        this._text_35 = this.renderer.createText(this._el_7, '\n  ', null);
        this._text_36 = this.renderer.createText(null, '\n  ', null);
        this._el_37 = this.renderer.createElement(null, 'p', null);
        this.renderer.setElementAttribute(this._el_37, 'class', 'text-center mob-flex-center mob-content-center');
        this._text_38 = this.renderer.createText(this._el_37, '\n    ', null);
        this._el_39 = this.renderer.createElement(this._el_37, 'a', null);
        this._text_40 = this.renderer.createText(this._el_39, 'Not Registered? Sign Up.', null);
        this._text_41 = this.renderer.createText(this._el_37, '\n    ', null);
        this._el_42 = this.renderer.createElement(this._el_37, 'button', null);
        this.renderer.setElementAttribute(this._el_42, 'class', 'button forget-password-button');
        this._text_43 = this.renderer.createText(this._el_42, 'Forgot Password', null);
        this._text_44 = this.renderer.createText(this._el_37, '\n  ', null);
        this._text_45 = this.renderer.createText(null, '\n', null);
        compView_0.create(this._Content_0_4, [
            [],
            [].concat([
                this._text_1,
                this._el_2,
                this._text_6,
                this._el_7,
                this._text_36,
                this._el_37,
                this._text_45
            ]),
            []
        ], null);
        this._text_46 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_7, 'submit', this.eventHandler(this._handle_submit_7_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_7, 'reset', this.eventHandler(this._handle_reset_7_1.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_39, 'click', this.eventHandler(this._handle_click_39_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_42, 'click', this.eventHandler(this._handle_click_42_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._text_45,
            this._text_46
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], []);
        return null;
    };
    _View_LoginPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.Label) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Label_13_3;
        }
        if (((token === import19.TextInput) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._TextInput_16_4;
        }
        if (((token === import16.Item) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Item_11_4;
        }
        if (((token === import16.ItemContent) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._ItemContent_11_5;
        }
        if (((token === import18.Label) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._Label_22_3;
        }
        if (((token === import19.TextInput) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._TextInput_25_4;
        }
        if (((token === import16.Item) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Item_20_4;
        }
        if (((token === import16.ItemContent) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._ItemContent_20_5;
        }
        if (((token === import15.List) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._List_9_3;
        }
        if (((token === import20.Button) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Button_32_4;
        }
        if (((token === import13.NgForm) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._NgForm_7_3;
        }
        if (((token === import36.ControlContainer) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._ControlContainer_7_4;
        }
        if (((token === import14.NgControlStatusGroup) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._NgControlStatusGroup_7_5;
        }
        if (((token === import12.Content) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._Content_0_4;
        }
        return notFoundResult;
    };
    _View_LoginPage0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_0_4.ngOnInit();
        }
        var currVal_9 = 'text';
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this._TextInput_16_4.type = currVal_9;
            this._expr_9 = currVal_9;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._TextInput_16_4.ngOnInit();
        }
        var currVal_10 = 'password';
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._TextInput_25_4.type = currVal_10;
            this._expr_10 = currVal_10;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._TextInput_25_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_11_1.dirty) {
                this._query_Button_11_1.reset([]);
                this._Item_11_4._buttons = this._query_Button_11_1;
                this._query_Button_11_1.notifyOnChanges();
            }
            if (this._query_Icon_11_2.dirty) {
                this._query_Icon_11_2.reset([]);
                this._Item_11_4._icons = this._query_Icon_11_2;
                this._query_Icon_11_2.notifyOnChanges();
            }
            if (this._query_Button_20_1.dirty) {
                this._query_Button_20_1.reset([]);
                this._Item_20_4._buttons = this._query_Button_20_1;
                this._query_Button_20_1.notifyOnChanges();
            }
            if (this._query_Icon_20_2.dirty) {
                this._query_Icon_20_2.reset([]);
                this._Item_20_4._icons = this._query_Icon_20_2;
                this._query_Icon_20_2.notifyOnChanges();
            }
            this._TextInput_16_4.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_11_4.ngAfterContentInit();
            }
            this._TextInput_25_4.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_20_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_32_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Content_0_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementClass(this._el_0, 'statusbar-padding', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_3 = this._NgControlStatusGroup_7_5.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_7, 'ng-untouched', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this._NgControlStatusGroup_7_5.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_7, 'ng-touched', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._NgControlStatusGroup_7_5.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_7, 'ng-pristine', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatusGroup_7_5.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_7, 'ng-dirty', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatusGroup_7_5.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_7, 'ng-valid', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatusGroup_7_5.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_7, 'ng-invalid', currVal_8);
            this._expr_8 = currVal_8;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_LoginPage0.prototype.destroyInternal = function () {
        this._TextInput_16_4.ngOnDestroy();
        this._TextInput_25_4.ngOnDestroy();
        this._Content_0_4.ngOnDestroy();
    };
    _View_LoginPage0.prototype._handle_submit_7_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._NgForm_7_3.onSubmit() !== false);
        return (true && pd_0);
    };
    _View_LoginPage0.prototype._handle_reset_7_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._NgForm_7_3.onReset() !== false);
        return (true && pd_0);
    };
    _View_LoginPage0.prototype._handle_click_39_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.signUp() !== false);
        return (true && pd_0);
    };
    _View_LoginPage0.prototype._handle_click_42_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.forgotPassword() !== false);
        return (true && pd_0);
    };
    return _View_LoginPage0;
}(import1.AppView));
export function viewFactory_LoginPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LoginPage === null)) {
        (renderType_LoginPage = viewUtils.createRenderComponentType('/Users/mackalvin/Downloads/ISI-V2/.tmp/pages/login/login.html', 0, import10.ViewEncapsulation.None, styles_LoginPage, {}));
    }
    return new _View_LoginPage0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=login.ngfactory.js.map