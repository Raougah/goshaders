var relearn_searchindex = [
  {
    "breadcrumb": "introduction",
    "content": "this first chapter will be divided in two:\nIntialising your godot project and setting up our scene: Setting Up Writing your first godot shader: Setting Up",
    "description": "this first chapter will be divided in two:\nIntialising your godot project and setting up our scene: Setting Up Writing your first godot shader: Setting Up",
    "tags": [],
    "title": "Your First Shader",
    "uri": "/goshaders/your-first-shader/index.html"
  },
  {
    "breadcrumb": "introduction \u003e Your First Shader",
    "content": "Creating the project Start by launching godot and creating a new project\nNote The choice of the renderer is not really important for this tutorial BUT if you plan to use compute shaders in the futur you should use Forward+ or Mobile otherwise using Compatibility is fine more of this in the godot documentation.\nSetting up the scene Add a new ColorRect and save your scene Add a new ressource to your project of and choose shader then open the shader editor drag and drop the created ressource in the color rect inspector under the CanvasItem \u003e Material Writing your first shader In the shader editor you should have the following code\n​ built-in shader code 1 2 3 4 5 6 7 8 9 10 11 12 13 14 shader_type spatial; void vertex() { // Called for every vertex the material is visible on. } void fragment() { // Called for every pixel the material is visible on. } //void light() { //\t// Called for every pixel for every light affecting the material. //\t// Uncomment to replace the default light processing function with this one. //} Code breakdown:\nshader_type spatial; This is the shader type used, there are 5 shaders types available in godot:\nspatial canvas_item particles sky fog in this tutorial we’ll use canvas_item for 2D rendering.\nvoid vertex() { // Called for every vertex the material is visible on. } void fragment() { // Called for every pixel the material is visible on. } shader effects are applied on vertices or pixels, the vertex() function applies the effect on every vertex of the object and fragment applies it on every pixel.\nfor our first shader we’ll try to change our rectangle color for this we need to use the COLOR property and change our shader type to canvas_item as follows:\nshader_type canvas_item; void fragment() { COLOR=vec4(1,1,0.5,1); //the COLOR property takes a vector4 representing the RGBA of the color with values between 0 and 1 } you should now see a yellow rectangle!\nCongratulatons on creating your first shader! it’s doesn’t do much for now but we’ll explore more fun ways to make shaders in futur chapters.",
    "description": "Creating the project Start by launching godot and creating a new project\nNote The choice of the renderer is not really important for this tutorial BUT if you plan to use compute shaders in the futur you should use Forward+ or Mobile otherwise using Compatibility is fine more of this in the godot documentation.",
    "tags": [],
    "title": "Setting Up",
    "uri": "/goshaders/your-first-shader/setting-up/index.html"
  },
  {
    "breadcrumb": "",
    "content": "What is Goshaders? Goshaders is a series of articles about the basics of shaders in godot, It will be primarly focused on 2D shaders basics with some practical examples and uses.\nImportant I assume some familiarity with the godot engine and some programming basics like variables conditions functions.\nWhat are shaders? Shaders are small programs that runs on a GPU we use them to manipulate how graphics are rendered, It can be used for various effects such as, grass or leafs fluttering in the wind, glitch efftects, a slash effect or any other special graphical modification.\nShaders are fast really fast in a similar way to normal code, shaders are sets of instructions what’s special about them is that shaders are run on every pixel/vertex in paralel.\nWarning Coding along is important to get a grip on many concepts, it’s preferrable to try and experiment alone on every new thing you discover to master those concepts",
    "description": "What is Goshaders? Goshaders is a series of articles about the basics of shaders in godot, It will be primarly focused on 2D shaders basics with some practical examples and uses.\nImportant I assume some familiarity with the godot engine and some programming basics like variables conditions functions.\nWhat are shaders? Shaders are small programs that runs on a GPU we use them to manipulate how graphics are rendered, It can be used for various effects such as, grass or leafs fluttering in the wind, glitch efftects, a slash effect or any other special graphical modification.",
    "tags": [],
    "title": "introduction",
    "uri": "/goshaders/index.html"
  },
  {
    "breadcrumb": "introduction",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/goshaders/categories/index.html"
  },
  {
    "breadcrumb": "introduction",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/goshaders/tags/index.html"
  }
]
