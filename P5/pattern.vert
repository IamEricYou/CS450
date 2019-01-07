#version 120 //compatibility
uniform float	uTime;		// "Time", from Animate( )
varying vec2  	vST;		// texture coords

varying vec3 vN; // normal vector
varying vec3 vL; // vector from point to light
varying vec3 vE; // vector from point to eye

const float PI = 	3.14159265;
const float AMP = 	0.2;		// amplitude
const float W = 	2.0;		// frequency

const vec3 LIGHTPOSITION = vec3( 5., 5., 0. );

uniform bool vert_on;

void
main( )
{ 
	vST = gl_MultiTexCoord0.st;
	vec3 vert = gl_Vertex.xyz;

	if(vert_on == true){
		vST.s = vST.s *(2+sin(uTime));
		vST.t = vST.t *(2+cos(uTime));
	}
	gl_Position = gl_ModelViewProjectionMatrix * vec4( vert, 1.0 );

}