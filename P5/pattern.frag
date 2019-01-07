#version 120 //compatibility
uniform float	uTime;		// "Time", from Animate( )
varying vec2  vST;		// texture coords (in)

uniform float uKa, uKd, uKs; // coefficients of each type of lighting
uniform vec3 uColor; // object color
uniform vec3 uSpecularColor; // light color
uniform float uShininess; // specular exponent
varying vec3 vN; // normal vector
varying vec3 vL; // vector from point to light
varying vec3 vE; // vector from point to eye

const float PI = 	3.14159265;

uniform float uS0, uT0, uSize;

uniform bool frag_on;
void
main( )
{
	vec3 myColor = vec3( 1.0,0.5,0.0 );
	
	if(frag_on == true)
	{
		if( vST.s >= 0.75 && vST.t >= 0.75 && sin(uTime) < 0.1)
		{
			myColor = vec3( 1.0,0.0,0.0 );
		}
		if( vST.s >= 0.75 && vST.t >= 0.75 && sin(uTime) > 0.1 && sin(uTime) < 0.2)
		{
			myColor = vec3( 0.960, 0.458, 0 );
		}
		if( vST.s >= 0.75 && vST.t >= 0.75 && sin(uTime) > 0.2 && sin(uTime) < 0.4)
		{
			myColor = vec3( 0.933, 0.960, 0 );
		}
		if( vST.s >= 0.75 && vST.t >= 0.75 && sin(uTime) > 0.4 && sin(uTime) < 0.6)
		{
			myColor = vec3( 0.505, 0.960, 0 );
		}
		if( vST.s >= 0.75 && vST.t >= 0.75 && sin(uTime) > 0.6 && sin(uTime) < 0.7)
		{
			myColor = vec3( 0, 0.368, 0.960);
		}
		if( vST.s >= 0.75 && vST.t >= 0.75 && sin(uTime) > 0.7 && sin(uTime) < 0.9)
		{
			myColor = vec3(0.341, 0, 0.960);
		}
		if( vST.s >= 0.75 && vST.t >= 0.75 && sin(uTime) > 0.9 && sin(uTime) < 1.0)
		{
			myColor = vec3( 0.925, 0, 0.960);
		}
	}else{
		if( vST.s >= 0.75 && vST.t >= 0.75)
		{
			myColor = vec3( 1.0,0.0,0.0 );
		}
	}

	gl_FragColor = vec4( myColor, 1.0);
}