# Diagrama Avanzado de Jerarquía de la Carpeta ./layouts/

Este diagrama representa la **estructura completa y detallada** de la carpeta `./layouts/` con todas sus dependencias, importaciones, parámetros, configuraciones y funcionalidades específicas.

```mermaid
---
title: Jerarquía Detallada de Hugo Layouts - Sitio JAEM
config:
  theme: base
  themeVariables:
    primaryColor: "#e1f5fe"
    primaryTextColor: "#01579b"
    primaryBorderColor: "#01579b"
    lineColor: "#666"
    secondaryColor: "#f3e5f5"
    tertiaryColor: "#e8f5e8"
---
graph TB
    %% 🎨 ESTILOS AVANZADOS PARA DIFERENTES TIPOS DE ARCHIVOS
    classDef htmlFile fill:#e1f5fe,stroke:#01579b,stroke-width:3px,color:#000,font-weight:bold
    classDef partial fill:#f3e5f5,stroke:#4a148c,stroke-width:3px,color:#000,font-weight:bold
    classDef layout fill:#e8f5e8,stroke:#1b5e20,stroke-width:3px,color:#000,font-weight:bold
    classDef shortcode fill:#fff3e0,stroke:#e65100,stroke-width:3px,color:#000,font-weight:bold
    classDef markup fill:#fce4ec,stroke:#880e4f,stroke-width:3px,color:#000,font-weight:bold
    classDef directory fill:#f5f5f5,stroke:#424242,stroke-width:2px,color:#000
    classDef external fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    classDef config fill:#fff8e1,stroke:#f57c00,stroke-width:2px,color:#000
    classDef data fill:#e8f5e8,stroke:#388e3c,stroke-width:2px,color:#000
    
    %% 📁 DIRECTORIO RAÍZ
    layouts[📁 layouts/<br/>🏗️ Sistema de Templates Hugo<br/>Arquitectura: Herencia + Partials + Shortcodes]:::directory
    
    %% 🏠 ARCHIVO PRINCIPAL INDEX.HTML
    layouts --> index_html[index.html<br/>🏠 Homepage Template<br/>📋 Blocks: header_css, body_classes, carusel, main, footer_js<br/>🎯 Context: Site, Pages<br/>⚡ Features: Carousel, Featured Post, Latest Posts]:::htmlFile
    
    %% 📂 DIRECTORIO _DEFAULT - TEMPLATES BASE
    layouts --> default_dir[📁 _default/<br/>🏗️ Base Templates Repository<br/>🔧 Hugo Template Hierarchy Root<br/>📜 Inheritance Chain Origin]:::directory
    
    default_dir --> baseof[baseof.html<br/>🏗️ Master Base Template<br/>📋 Blocks: title, meta_tags, header_css, body_classes, carusel, main, footer, footer_js<br/>🎨 Loads: Bootstrap 5.3.6, Icons 1.13.1, Custom CSS/JS<br/>📱 Features: Responsive, SEO, FOUC Prevention<br/>🔧 Script: Grid/List View Management<br/>⚙️ Meta: OpenGraph, Twitter Cards]:::layout
    
    default_dir --> root_default[root.html<br/>📄 Root Page Template<br/>🎯 Usage: Homepage alternatives<br/>📋 Inherits: baseof.html]:::layout
    
    default_dir --> section_default[section.html<br/>📂 Default Section List<br/>🎯 Usage: Generic content sections<br/>📋 Inherits: baseof.html<br/>🔧 Features: Pagination, Sorting]:::layout
    
    default_dir --> single_default[single.html<br/>📄 Single Content Template<br/>🎯 Usage: Individual pages/posts<br/>📋 Inherits: baseof.html<br/>🧭 Features: Navigation breadcrumbs, Prev/Next<br/>🖼️ Image: Featured with fallback]:::layout
    
    %% 📝 SUBDIRECTORIO _MARKUP - RENDERIZADORES
    default_dir --> markup_dir[📁 _markup/<br/>🎨 Content Processors<br/>🔧 Hugo Render Hooks<br/>⚡ Auto-processing Markdown]:::directory
    
    markup_dir --> render_codeblock[render-codeblock.html<br/>💻 Code Block Renderer<br/>🎨 Syntax: Chroma highlighting<br/>🔧 Features: Copy button, Language detection<br/>📋 Input: .Type, .Inner<br/>🎯 Output: Styled &lt;pre&gt;&lt;code&gt;]:::markup
    
    markup_dir --> render_image[render-image.html<br/>🖼️ Image Renderer<br/>🔧 Features: Responsive, Alt text, Captions<br/>📋 Input: .Destination, .Text, .Title<br/>🎯 Output: &lt;figure&gt;&lt;img&gt;&lt;figcaption&gt;]:::markup
    
    %% 🧩 DIRECTORIO PARTIALS - COMPONENTES REUTILIZABLES
    layouts --> partials_dir[📁 partials/<br/>🧩 Reusable Components<br/>🔄 Shared Template Logic<br/>📦 Modular Architecture]:::directory
    
    partials_dir --> header[header.html<br/>🔝 Site Header Component<br/>📋 Params: Site.Menus.main, Site.Title<br/>📱 Features: Mobile menu, Responsive nav<br/>🎨 Style: Bootstrap navbar<br/>⚙️ JS: Menu state management<br/>🔧 Data: localStorage integration]:::partial
    
    partials_dir --> footer[footer.html<br/>🔻 Site Footer Component<br/>📋 Params: Site.Data.social, Site.Params<br/>🔗 Links: Social networks, Copyright<br/>📊 Analytics: Integration ready]:::partial
    
    partials_dir --> carousel[carousel.html<br/>🎠 Bootstrap Carousel<br/>📋 Params: Site.Data.caurouselSilides<br/>🔧 Features: Auto-slide, Indicators, Captions<br/>⏱️ Timing: 2s/4s intervals<br/>🎨 Style: Custom overlay text]:::partial
    
    partials_dir --> author[author.html<br/>👤 Author Info Component<br/>📋 Params: Site.Params.name, Site.Data.author<br/>🖼️ Avatar: Profile image support]:::partial
    
    partials_dir --> content[content.html<br/>📝 Main Content Wrapper<br/>🔧 Purpose: Content area standardization]:::partial
    
    partials_dir --> featured_post[featured_post_section.html<br/>⭐ Featured Post Section<br/>📋 Params: .Context (Site context)<br/>🎯 Config: Site.Params.showFeaturedPost, featuredPost<br/>🔧 Features: Grid/List view support<br/>📄 Usage: Homepage highlight]:::partial
    
    partials_dir --> latest_posts[latest_posts_section.html<br/>📰 Latest Posts Section<br/>📋 Params: .Context (Site context)<br/>🔢 Limit: 4 recent posts<br/>🎯 Filter: Type="posts", Regular pages only<br/>📊 Sort: ByDate.Reverse]:::partial
    
    partials_dir --> pagination[pagination.html<br/>📄 Pagination Component<br/>🔢 Features: Page numbers, Prev/Next<br/>📱 Responsive: Mobile-friendly<br/>🎨 Style: Bootstrap pagination]:::partial
    
    partials_dir --> posts_grid[posts_grid_list.html<br/>📊 Posts Grid/List View<br/>📋 Params: .Pages, .Context, .TotalArticles, .TotalCategories<br/>🔧 Features: Grid/List toggle, Paginación<br/>🎯 Views: Responsive grid (1-4 cols)<br/>📱 Mobile: Single column<br/>🎨 Cards: Hover effects, Shadows]:::partial
    
    partials_dir --> projects_grid[projects_grid_list.html<br/>🚀 Projects Grid/List<br/>📋 Similar to posts_grid<br/>🎯 Content: Project portfolios<br/>🔧 Features: Custom project styling]:::partial
    
    partials_dir --> single_post_card[single_post_card.html<br/>🎴 Individual Post Card<br/>📋 Params: .Post, .ViewType (list/grid), .ShowBadge<br/>🖼️ Image: Fallback to /images/no-img.png<br/>🏷️ Meta: Date, categories, reading time<br/>🎨 Style: Hover animations, Responsive]:::partial
    
    partials_dir --> google_analytics[google-analytics.html<br/>📊 Google Analytics<br/>📋 Params: Site.Params.google_analytics_id<br/>🔧 Features: GDPR ready, Async loading]:::partial
    
    %% 📄 DIRECTORIO PAGE - TEMPLATES ESPECÍFICOS
    layouts --> page_dir[📁 page/<br/>📄 Page-specific Templates<br/>🎯 Override: Default behaviors<br/>📋 Context: Page content type]:::directory
    
    page_dir --> about_page[about.html<br/>ℹ️ About Page Template<br/>📋 Inherits: baseof.html<br/>🎯 Usage: /about/ URL<br/>🔧 Custom: Author info, Bio]:::htmlFile
    
    page_dir --> section_page[section.html<br/>📂 Page Section Template<br/>📋 Inherits: baseof.html<br/>🎯 Usage: Static page listings]:::htmlFile
    
    page_dir --> single_page[single.html<br/>📄 Single Page Template<br/>📋 Inherits: baseof.html<br/>🎯 Usage: Individual static pages]:::htmlFile
    
    %% 📝 DIRECTORIO POSTS - BLOG TEMPLATES
    layouts --> posts_dir[📁 posts/<br/>📝 Blog Post Templates<br/>🎯 Content: Articles, Tutorials<br/>📋 Context: posts/ content section]:::directory
    
    posts_dir --> posts_root[root.html<br/>📄 Posts Root Template<br/>🎯 Usage: /posts/ main page<br/>📋 Inherits: baseof.html]:::htmlFile
    
    posts_dir --> section_posts[section.html<br/>📂 Posts Section List<br/>📋 Inherits: baseof.html<br/>🔧 Features: Subsection + articles merge<br/>📊 Pagination: Site.Params.pagerSize (6)<br/>🎯 Views: Grid/List toggle<br/>📱 Responsive: Adaptive columns<br/>🏷️ Meta: Category badges, Post counts]:::htmlFile
    
    posts_dir --> single_posts[single.html<br/>📄 Individual Post<br/>📋 Inherits: baseof.html<br/>🧭 Navigation: Prev/Next in section<br/>🖼️ Featured: Hero image<br/>📊 Meta: Author, date, categories, tags<br/>💬 Features: Comments ready]:::htmlFile
    
    %% 🚀 DIRECTORIO PROJECTS - PORTFOLIO TEMPLATES
    layouts --> projects_dir[📁 projects/<br/>🚀 Portfolio Templates<br/>🎯 Content: Work showcase<br/>📋 Context: projects/ content section]:::directory
    
    projects_dir --> proj_root[root.html<br/>📄 Projects Root<br/>🎯 Usage: /projects/ main page<br/>📋 Inherits: baseof.html]:::htmlFile
    
    projects_dir --> proj_section[section.html<br/>📂 Projects Section<br/>📋 Inherits: baseof.html<br/>🔧 Similar to posts section<br/>🎯 Gallery: Project showcase]:::htmlFile
    
    projects_dir --> proj_single[single.html<br/>📄 Single Project<br/>📋 Inherits: baseof.html<br/>🎯 Features: Detailed project view<br/>🔗 Links: Demo, source code<br/>🛠️ Tech: Technology stack display]:::htmlFile
    
    %% ⚡ DIRECTORIO SHORTCODES - CÓDIGO DINÁMICO
    layouts --> shortcodes_dir[📁 shortcodes/<br/>⚡ Dynamic Content Helpers<br/>🔧 Markdown Extensions<br/>📝 Usage: {{&lt; shortcode &gt;}}]:::directory
    
    shortcodes_dir --> codeblock_short[codeblock.html<br/>💻 Custom Code Block<br/>📋 Params: .Get "lang", .Get "title", .Inner<br/>🎨 Features: Custom header, Copy button<br/>🔧 Enhancement: Over default code blocks<br/>⚙️ Usage: Manual code highlighting]:::shortcode
    
    %% 🔄 DEPENDENCIAS E IMPORTACIONES DETALLADAS
    
    %% 🏗️ HERENCIA BASEOF - TODO HEREDA DE LA BASE
    baseof -.->|extends| index_html
    baseof -.->|extends| root_default
    baseof -.->|extends| section_default
    baseof -.->|extends| single_default
    baseof -.->|extends| about_page
    baseof -.->|extends| section_page
    baseof -.->|extends| single_page
    baseof -.->|extends| posts_root
    baseof -.->|extends| section_posts
    baseof -.->|extends| single_posts
    baseof -.->|extends| proj_root
    baseof -.->|extends| proj_section
    baseof -.->|extends| proj_single
    
    %% 🧩 BASEOF IMPORTA PARTIALS CORE
    baseof -->|partial "header.html" .| header
    baseof -->|partial "footer.html" .| footer
    
    %% 🏠 INDEX.HTML PARTIALS ESPECÍFICOS
    index_html -->|partial "carousel.html" .| carousel
    index_html -->|partial "featured_post_section.html" dict| featured_post
    index_html -->|partial "latest_posts_section.html" dict| latest_posts
    
    %% ⭐ FEATURED POST DEPENDENCIES
    featured_post -->|partial "single_post_card.html" dict| single_post_card
    
    %% 📰 LATEST POSTS DEPENDENCIES
    latest_posts -->|partial "posts_grid_list.html" dict| posts_grid
    
    %% 📊 POSTS GRID DEPENDENCIES
    posts_grid -->|partial "single_post_card.html" dict| single_post_card
    posts_grid -->|partial "pagination.html" .| pagination
    
    %% 🚀 PROJECTS GRID SIMILAR STRUCTURE
    projects_grid -->|partial "single_post_card.html" dict| single_post_card
    
    %% 📂 SECTION POSTS USA GRID
    section_posts -->|partial "posts_grid_list.html" dict| posts_grid
    
    %% 📊 DEPENDENCIAS DE DATOS EXTERNOS
    carousel -.->|.Site.Data.caurouselSilides| carousel_data[📊 data/caurouselSilides.json<br/>🎠 Carousel Slides Data<br/>📋 Keys: firstSlide, firstLabel, firstDescription<br/>📋 Keys: secondtSlide, secondtLabel, secondDescription<br/>📋 Keys: thirdSlide, thirdLabel, thirdDescription]:::data
    
    header -.->|.Site.Data.social| social_data[📊 data/social.json<br/>🔗 Social Media Links<br/>📋 Keys: platform, url, icon, label]:::data
    
    footer -.->|.Site.Data.social| social_data
    
    author -.->|.Site.Data.author| author_data[📊 data/author.json<br/>👤 Author Information<br/>📋 Keys: name, bio, avatar, social]:::data
    
    %% ⚙️ CONFIGURACIÓN DEL SITIO
    header -.->|.Site.Menus.main| site_menus[⚙️ config.toml - Menu<br/>📋 Sections: menu.main<br/>🔗 Items: Acerca, Servicios, Posts, Proyectos<br/>⚖️ Weight: 10, 20, 30, 40]:::config
    
    baseof -.->|.Site.Params| site_config[⚙️ config.toml - Site Config<br/>📋 Base: baseURL, title, theme<br/>🎨 CSS: chroma-syntax, variables, base, header<br/>⚡ JS: scripts.js<br/>📊 Analytics: google_analytics_id<br/>🔧 Features: enableRobotsTXT, showPostsOnHomepage<br/>📄 Pagination: pagerSize = 6]:::config
    
    featured_post -.->|.Site.Params| featured_params[⚙️ Site.Params.Featured<br/>📋 showFeaturedPost: true<br/>📄 featuredPost: "posts/dotnet/windowsforms/"<br/>🎯 Conditional rendering]:::config
    
    %% 🎨 DEPENDENCIAS CSS/JS EXTERNAS
    baseof -.->|CDN| bootstrap_css[🎨 Bootstrap 5.3.6 CSS<br/>📦 cdn.jsdelivr.net<br/>🔧 Features: Grid, Components, Utilities<br/>🎯 Integrity: SHA384 verified]:::external
    
    baseof -.->|CDN| bootstrap_icons[🎨 Bootstrap Icons 1.13.1<br/>📦 cdn.jsdelivr.net<br/>🔧 Icon Font: bi-*]:::external
    
    baseof -.->|Local| custom_css[🎨 CSS Personalizados<br/>📄 Files: variables.css, base.css, header.css<br/>📄 Files: components.css, footer.css, utilities.css<br/>📄 Files: responsive.css, chroma-syntax.css<br/>🎯 Custom styling system]:::external
    
    baseof -.->|CDN| jquery[⚙️ jQuery 3.7.1 Slim<br/>📦 code.jquery.com<br/>🔧 DOM manipulation<br/>🎯 Integrity: SHA256 verified]:::external
    
    baseof -.->|CDN| bootstrap_js[⚙️ Bootstrap 5.3.6 JS Bundle<br/>📦 cdn.jsdelivr.net<br/>🔧 Components: Modals, Dropdowns, Carousel<br/>🎯 Includes Popper.js]:::external
    
    baseof -.->|Local| custom_js[⚙️ JS Personalizados<br/>📄 /js/scripts.js<br/>🔧 Features: Grid/List toggle, Menu control<br/>💾 LocalStorage: View preferences]:::external
    
    %% 🎨 RENDERIZADORES Y PROCESADORES
    render_codeblock -.->|Chroma| chroma_css[🎨 Chroma Syntax Highlighting<br/>📋 Style: dracula theme<br/>🔧 Features: Code fences, Line numbers<br/>⚙️ Config: markup.highlight]:::external
    
    render_image -.->|Bootstrap| responsive_img[🎨 Responsive Images<br/>🔧 Classes: img-fluid<br/>📱 Features: Auto-sizing]:::external
    
    %% ⚡ SHORTCODES Y MARKUP RELATION
    codeblock_short -.->|Similar logic| render_codeblock
    
    %% 🔧 MARKUP PROCESSORS
    markup_dir -.->|Hugo| hugo_processor[🔧 Hugo Render Hooks<br/>⚡ Auto-processing: Markdown → HTML<br/>🎯 Triggers: Code blocks, Images, Links<br/>📋 Context: Page, Site]:::external
    header -.-> social_data[📊 data/social.json]:::directory
    
    %% Dependencias de CSS/JS
    baseof -.-> bootstrap_css[🎨 Bootstrap 5.3.6 CSS]:::directory
    baseof -.-> bootstrap_icons[🎨 Bootstrap Icons 1.13.1]:::directory
    baseof -.-> custom_css[🎨 CSS Personalizados<br/>(/css/*.css)]:::directory
    baseof -.-> jquery[⚙️ jQuery 3.7.1]:::directory
    baseof -.-> bootstrap_js[⚙️ Bootstrap 5.3.6 JS]:::directory
    baseof -.-> custom_js[⚙️ JS Personalizados<br/>(/js/*.js)]:::directory
    
    %% Renderizadores de markup
    render_codeblock -.-> chroma_css[🎨 Chroma Syntax CSS]:::directory
    render_image -.-> responsive_img[🎨 Responsive Images]:::directory
    
    %% Shortcodes similares a markup
    codeblock_short -.-> render_codeblock
    
    %% Configuración del sitio
    baseof -.-> site_config[⚙️ config.toml<br/>Parámetros del sitio]:::directory
    featured_post -.-> site_params[⚙️ Site.Params<br/>showFeaturedPost, featuredPost]:::directory
    
    %% Leyenda de tipos de archivo
    subgraph legend[" 📋 LEYENDA "]
        direction TB
        layout_legend[📄 Layout File<br/>Plantillas principales]:::layoutFile
        partial_legend[📄 Partial File<br/>Componentes reutilizables]:::partialFile
        markup_legend[📄 Markup Renderer<br/>Procesadores de contenido]:::markupFile
        shortcode_legend[📄 Shortcode<br/>Componentes de contenido]:::shortcodeFile
        directory_legend[📁 Directory/Data<br/>Carpetas y datos externos]:::directory
    end
    
    %% Notas importantes
    subgraph notes[" 📝 NOTAS IMPORTANTES "]
        direction TB
        note1[• baseof.html es la plantilla base que heredan todos los layouts]
        note2[• Los partials son componentes reutilizables llamados con 'partial']
        note3[• Los shortcodes se usan en contenido Markdown]
        note4[• Los renderizadores de markup procesan código e imágenes automáticamente]
        note5[• Las dependencias CSS/JS se cargan desde CDN y archivos locales]
        note6[• El sistema soporta vistas grid/list dinámicas con JavaScript]
    end
```

## Descripción Funcional Detallada

### **Archivo Principal: `index.html`**
- **Propósito**: Página de inicio del sitio
- **Dependencias**: 
  - Hereda de `baseof.html`
  - Importa `carousel.html` para el carrusel
  - Importa `featured_post_section.html` para el post destacado
  - Importa `latest_posts_section.html` para posts recientes

### **Plantilla Base: `_default/baseof.html`**
- **Propósito**: Estructura HTML base para todo el sitio
- **Funcionalidades**:
  - Carga CSS de Bootstrap 5.3.6 y estilos personalizados
  - Incluye meta tags para SEO y redes sociales
  - Script para evitar FOUC (Flash of Unstyled Content)
  - Carga JavaScript de jQuery y Bootstrap
- **Dependencias**:
  - `partials/header.html`
  - `partials/footer.html`
  - CSS/JS externos y personalizados

### **Componentes Partials Clave**

#### `partials/posts_grid_list.html`
- **Propósito**: Componente versátil para mostrar posts en vista grid o lista
- **Parámetros**: `.Pages`, `.Context`, `.ShowViewButtons`
- **Dependencias**: `single_post_card.html`

#### `partials/single_post_card.html`
- **Propósito**: Tarjeta individual para mostrar un post
- **Parámetros**: `.Post`, `.ViewType` (list/grid), `.ShowBadge`
- **Funcionalidades**: Soporte para imagen fallback, badges opcionales

#### `partials/featured_post_section.html`
- **Propósito**: Sección especial para el post destacado
- **Configuración**: Usa `Site.Params.showFeaturedPost` y `Site.Params.featuredPost`
- **Dependencias**: `single_post_card.html`

### **Layouts Específicos por Sección**

#### `posts/section.html`
- **Propósito**: Lista todos los posts con paginación
- **Funcionalidades**:
  - Combina subsecciones y artículos directos
  - Soporte para vista grid/lista
  - Paginación integrada
- **Dependencias**: `posts_grid_list.html`

#### `_default/single.html`
- **Propósito**: Página individual para posts/páginas
- **Funcionalidades**:
  - Navegación entre posts (anterior/siguiente)
  - Imagen destacada con fallback
  - Breadcrumb automático

### **Procesadores de Contenido**

#### `_default/_markup/render-codeblock.html`
- **Propósito**: Renderiza bloques de código con sintaxis highlighting
- **Funcionalidades**: Botón de copiar, soporte para múltiples lenguajes

#### `shortcodes/codeblock.html`
- **Propósito**: Shortcode personalizado para bloques de código
- **Parámetros**: `lang`, `title`
- **Diferencia**: Más control manual vs. renderizado automático

### **Sistema de Dependencias**
1. **Jerarquía de herencia**: Todos los layouts heredan de `baseof.html`
2. **Importación de partials**: Uso de `{{ partial "nombre.html" . }}`
3. **Dependencias de datos**: Acceso a `Site.Data` y `Site.Params`
4. **CSS/JS externos**: Bootstrap, jQuery, y archivos personalizados
5. **Configuración**: Parámetros desde `config.toml`
