'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">barta-chat-nest documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"' : 'data-target="#xs-controllers-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"' :
                                            'id="xs-controllers-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"' : 'data-target="#xs-injectables-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"' :
                                        'id="xs-injectables-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"' : 'data-target="#xs-controllers-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"' :
                                            'id="xs-controllers-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"' : 'data-target="#xs-injectables-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"' :
                                        'id="xs-injectables-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChatsModule.html" data-type="entity-link" >ChatsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"' : 'data-target="#xs-controllers-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"' :
                                            'id="xs-controllers-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"' }>
                                            <li class="link">
                                                <a href="controllers/ChatsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"' : 'data-target="#xs-injectables-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"' :
                                        'id="xs-injectables-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"' }>
                                        <li class="link">
                                            <a href="injectables/ChatsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessageModule.html" data-type="entity-link" >MessageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"' : 'data-target="#xs-controllers-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"' :
                                            'id="xs-controllers-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"' }>
                                            <li class="link">
                                                <a href="controllers/MessageController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"' : 'data-target="#xs-injectables-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"' :
                                        'id="xs-injectables-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"' }>
                                        <li class="link">
                                            <a href="injectables/MessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-cdb6cce48e80fbbad1e3be3ca55edfe523dce6ce3a983b3cf9a4ea1bfefc6e0ba326c3d3ae27bd82b9a7e46a9e56eb6a84334d5c3dd7a493538669126490347b"' : 'data-target="#xs-injectables-links-module-UsersModule-cdb6cce48e80fbbad1e3be3ca55edfe523dce6ce3a983b3cf9a4ea1bfefc6e0ba326c3d3ae27bd82b9a7e46a9e56eb6a84334d5c3dd7a493538669126490347b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-cdb6cce48e80fbbad1e3be3ca55edfe523dce6ce3a983b3cf9a4ea1bfefc6e0ba326c3d3ae27bd82b9a7e46a9e56eb6a84334d5c3dd7a493538669126490347b"' :
                                        'id="xs-injectables-links-module-UsersModule-cdb6cce48e80fbbad1e3be3ca55edfe523dce6ce3a983b3cf9a4ea1bfefc6e0ba326c3d3ae27bd82b9a7e46a9e56eb6a84334d5c3dd7a493538669126490347b"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ChatsController.html" data-type="entity-link" >ChatsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MessageController.html" data-type="entity-link" >MessageController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Chat.html" data-type="entity-link" >Chat</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ChatMember.html" data-type="entity-link" >ChatMember</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Message.html" data-type="entity-link" >Message</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddUserDto.html" data-type="entity-link" >AddUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateChatDto.html" data-type="entity-link" >CreateChatDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMessageDto.html" data-type="entity-link" >CreateMessageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDTO.html" data-type="entity-link" >SignInDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateChatDto.html" data-type="entity-link" >UpdateChatDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMessageDto.html" data-type="entity-link" >UpdateMessageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChatsService.html" data-type="entity-link" >ChatsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ChatAdminOrOwnerGuard.html" data-type="entity-link" >ChatAdminOrOwnerGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/MessageGuard.html" data-type="entity-link" >MessageGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CustomEvent.html" data-type="entity-link" >CustomEvent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});