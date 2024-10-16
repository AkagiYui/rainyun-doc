/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    //tutorialSidebar: [,{type: 'autogenerated', dirName: '.'}]
    // But you can create a sidebar manually
    tutorialSidebar: [
        'intro',
        {
            "type": "link",
            "label": "用户相关",
            "className": "icon-account",
            "href": "/docs/category/account",
        },
        {
            "type": "link",
            "label": "虚拟主机RVH",
            "className": "icon-rvh",
            "href": "/docs/category/rvh",
        },
        {
            "type": "link",
            "label": "云服务器RCS",
            "className": "icon-rcs",
            "href": "/docs/category/rcs",
        },
        {
            "type": "link",
            "label": "游戏云VPS/面板",
            "className": "icon-rgs",
            "href": "/docs/category/rgs",
        },
        {
            "type": "link",
            "label": "对象存储",
            "className": "icon-ros",
            "href": "/docs/category/ros",
        },
        {
            "type": "link",
            "label": "雨盾CDN",
            "className": "icon-ros",
            "href": "/docs/category/cdn",
        },
        {
            "type": "link",
            "label": "域名服务",
            "className": "icon-domain",
            "href": "/docs/category/domain",
        }, "support", "terms"
    ],
    account: [{
        "type": "category",
        "label": '用户相关', link: {
            type: 'generated-index',
            // 你可以在这里添加其他配置，比如标题或描述
            title: '雨云账号',
            description: '关于雨云账号的文档。',
            slug: "/category/account"
        },
        "items": [
            {
                "type": "autogenerated",
                "dirName": "account"
            }
        ]
    },],
    rvh: [{
        "type": "category",
        "label": "虚拟主机",
        link: {
            type: 'generated-index',
            // 你可以在这里添加其他配置，比如标题或描述
            title: '虚拟主机',
            description: '关于雨云虚拟主机账号的文档。',
            slug: "/category/rvh"
        },
        "items": [
            {
                "type": "autogenerated",
                "dirName": "rvh"
            }]
    },],
    rcs: [{
        "type": "category",
        "label": "云服务器", link: {
            type: 'generated-index',
            // 你可以在这里添加其他配置，比如标题或描述
            title: '云服务器',
            description: '关于雨云云服务器的文档。',
            slug: "/category/rcs"
        },
        "items": [
            {
                "type": "autogenerated",
                "dirName": "rcs"
            }]
    },],
    rgs: [{
        "type": "category",
        "label": "游戏云服务器", link: {
            type: 'generated-index',
            // 你可以在这里添加其他配置，比如标题或描述
            title: '游戏云',
            description: '关于游戏云的文档。',
            slug: "/category/rgs"
        },
        "items": [
            {
                "type": "autogenerated",
                "dirName": "rgs"
            }]
    },],
    ros: [{
        "type": "category",
        "label": "对象存储", link: {
            type: 'generated-index',
            // 你可以在这里添加其他配置，比如标题或描述
            title: '对象存储',
            description: '关于对象存储的文档。',
            slug: "/category/ros"
        },
        "items": [
            {
                "type": "autogenerated",
                "dirName": "ros"
            }]
    },],
    domain: [{
        "type": "category",
        "label": "域名", link: {
            type: 'generated-index',
            // 你可以在这里添加其他配置，比如标题或描述
            title: '域名服务',
            description: '关于域名相关的文档。',
            slug: "/category/domain"
        },
        "items": [
            {
                "type": "autogenerated",
                "dirName": "domain"
            }]
    },],
    cdn: [{
        "type": "category",
        "label": "雨盾CDN", link: {
            type: 'generated-index',
            // 你可以在这里添加其他配置，比如标题或描述
            title: '雨盾CDN',
            description: '和雨盾与CDN的文档都在这里。',
            slug: "/category/cdn"
        },
        "items": [
            {
                "type": "autogenerated",
                "dirName": "cdn"
            }]
    },],
    guide: [{
        "type": "autogenerated",
        "dirName": "guide"
    },]
};

module.exports = sidebars;
