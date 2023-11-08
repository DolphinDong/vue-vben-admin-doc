import{o as n,c as a,a as s}from"./app.8cddb23b.js";const t='{"title":"Tinymce","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"components/tinymce.md","lastUpdated":1699431672894}',p={},e=s('<h1 id="tinymce"><a class="header-anchor" href="#tinymce" aria-hidden="true">#</a> Tinymce</h1><p>富文本组件位于 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Tinymce" target="_blank" rel="noopener noreferrer">src/components/TinyMce</a></p><div class="tip custom-block"><p class="custom-block-title">富文本组件使用的是 CDN 方式引入</p><p>可在 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Tinymce/src/Editor.vue" target="_blank" rel="noopener noreferrer">/@/components/TinyMce/src/Editor.vue</a> 更改下面 CDN 地址</p><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token constant">CDN_URL</span> <span class="token operator">=</span> <span class="token string">&#39;https://cdn.bootcdn.net/ajax/libs/tinymce/5.5.1&#39;</span><span class="token punctuation">;</span>\n</code></pre></div></div><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tinymce</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Tinymce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Tinymce/index&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> Tinymce <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;hello world!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> handleChange<span class="token punctuation">,</span> value <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>options</td><td><code>any</code></td><td>{}</td><td>tinymce 的配置项</td></tr><tr><td>value(v-model)</td><td><code>string</code></td><td>-</td><td>双向绑定值</td></tr><tr><td>height</td><td><code>number , string</code></td><td>400</td><td>高度</td></tr><tr><td>width</td><td><code>number , string</code></td><td>auto</td><td>宽度</td></tr><tr><td>toolbar</td><td><code>string[]</code></td><td>-</td><td>工具栏</td></tr><tr><td>plugins</td><td><code>string[]</code></td><td>-</td><td>插件</td></tr><tr><td>showImageUpload</td><td><code>boolean</code></td><td>true</td><td>是否显示上传按钮</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>事件</th><th>回调参数</th><th>返回值</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td><code>(str:string)=&gt;{}</code></td><td></td><td>富文本内容改变触发事件</td></tr></tbody></table>',9);p.render=function(s,t,p,o,c,l){return n(),a("div",null,[e])};export default p;export{t as __pageData};
