import{o as a,c as n,a as t}from"./app.8cddb23b.js";const s='{"title":"FlowChart","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"}],"relativePath":"components/flow-chart.md","lastUpdated":1699431672890}',p={},o=t('<h1 id="flowchart"><a class="header-anchor" href="#flowchart" aria-hidden="true">#</a> FlowChart</h1><p>流程图组件，基于 <code>didi/LogicFlow</code> 的简单封装。详细配置请参考文档 <a href="http://logic-flow.org/guide/start.html" target="_blank" rel="noopener noreferrer">FlowChart</a></p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlowChart</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demoData<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> FlowChart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/FlowChart&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> PageWrapper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Page&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">import</span> demoData <span class="token keyword">from</span> <span class="token string">&#39;./dataTurbo.json&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> FlowChart<span class="token punctuation">,</span> PageWrapper <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> demoData <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>flowOptions</td><td><code>object</code></td><td>-</td><td>-</td><td>FlowCharts 配置项</td></tr><tr><td>data</td><td><code>object</code></td><td>-</td><td>-</td><td>流程数据</td></tr><tr><td>toolbar</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>是否显示工具栏</td></tr><tr><td>patternItems</td><td><code>[]</code></td><td>-</td><td>-</td><td>左侧拖拽列表数据</td></tr></tbody></table>',6);p.render=function(t,s,p,e,c,l){return a(),n("div",null,[o])};export default p;export{s as __pageData};
