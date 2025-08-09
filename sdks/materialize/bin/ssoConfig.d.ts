import * as pulumi from "@pulumi/pulumi";
export declare class SsoConfig extends pulumi.CustomResource {
    /**
     * Get an existing SsoConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SsoConfigState, opts?: pulumi.CustomResourceOptions): SsoConfig;
    /**
     * Returns true if the given object is an instance of SsoConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SsoConfig;
    /**
     * Whether SSO is enabled or not. If enabled, users will be redirected to the SSO endpoint for authentication. The
     * configuration needs to be valid for SSO to work.
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * The client ID of the OIDC application. This is used to identify the application to the OIDC service. This is required if
     * the type is OIDC.
     */
    readonly oidcClientId: pulumi.Output<string | undefined>;
    /**
     * The client secret of the OIDC application. This is used to authenticate the application to the OIDC service. This is
     * required if the type is OIDC.
     */
    readonly oidcSecret: pulumi.Output<string | undefined>;
    /**
     * The public certificate of the SSO service. This is used to verify the SSO response. The certificate must be in PEM
     * format. The certificate must be accessible from the browser. If the certificate is not accessible from the browser, you
     * can use the public certificate of the Identity Provider (IdP) instead.
     */
    readonly publicCertificate: pulumi.Output<string>;
    /**
     * Indicates whether the SSO request needs to be digitally signed.
     */
    readonly signRequest: pulumi.Output<boolean>;
    readonly ssoConfigId: pulumi.Output<string>;
    /**
     * The URL endpoint for the SSO service. This is the URL that users will be redirected to for authentication. The URL must
     * be accessible from the browser.
     */
    readonly ssoEndpoint: pulumi.Output<string>;
    /**
     * Defines the type of SSO protocol being used (e.g., saml, oidc).
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a SsoConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SsoConfigArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SsoConfig resources.
 */
export interface SsoConfigState {
    /**
     * Whether SSO is enabled or not. If enabled, users will be redirected to the SSO endpoint for authentication. The
     * configuration needs to be valid for SSO to work.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The client ID of the OIDC application. This is used to identify the application to the OIDC service. This is required if
     * the type is OIDC.
     */
    oidcClientId?: pulumi.Input<string>;
    /**
     * The client secret of the OIDC application. This is used to authenticate the application to the OIDC service. This is
     * required if the type is OIDC.
     */
    oidcSecret?: pulumi.Input<string>;
    /**
     * The public certificate of the SSO service. This is used to verify the SSO response. The certificate must be in PEM
     * format. The certificate must be accessible from the browser. If the certificate is not accessible from the browser, you
     * can use the public certificate of the Identity Provider (IdP) instead.
     */
    publicCertificate?: pulumi.Input<string>;
    /**
     * Indicates whether the SSO request needs to be digitally signed.
     */
    signRequest?: pulumi.Input<boolean>;
    ssoConfigId?: pulumi.Input<string>;
    /**
     * The URL endpoint for the SSO service. This is the URL that users will be redirected to for authentication. The URL must
     * be accessible from the browser.
     */
    ssoEndpoint?: pulumi.Input<string>;
    /**
     * Defines the type of SSO protocol being used (e.g., saml, oidc).
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SsoConfig resource.
 */
export interface SsoConfigArgs {
    /**
     * Whether SSO is enabled or not. If enabled, users will be redirected to the SSO endpoint for authentication. The
     * configuration needs to be valid for SSO to work.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The client ID of the OIDC application. This is used to identify the application to the OIDC service. This is required if
     * the type is OIDC.
     */
    oidcClientId?: pulumi.Input<string>;
    /**
     * The client secret of the OIDC application. This is used to authenticate the application to the OIDC service. This is
     * required if the type is OIDC.
     */
    oidcSecret?: pulumi.Input<string>;
    /**
     * The public certificate of the SSO service. This is used to verify the SSO response. The certificate must be in PEM
     * format. The certificate must be accessible from the browser. If the certificate is not accessible from the browser, you
     * can use the public certificate of the Identity Provider (IdP) instead.
     */
    publicCertificate: pulumi.Input<string>;
    /**
     * Indicates whether the SSO request needs to be digitally signed.
     */
    signRequest: pulumi.Input<boolean>;
    ssoConfigId?: pulumi.Input<string>;
    /**
     * The URL endpoint for the SSO service. This is the URL that users will be redirected to for authentication. The URL must
     * be accessible from the browser.
     */
    ssoEndpoint: pulumi.Input<string>;
    /**
     * Defines the type of SSO protocol being used (e.g., saml, oidc).
     */
    type: pulumi.Input<string>;
}
