<%@ page language="java"  contentType="text/html;charset=UTF-8" pageEncoding="utf-8"%>
<%@ page import="java.io.*" %>
<%@ page import="java.net.*"%>
<%@ page import="java.util.*"%>


<%
    request.setCharacterEncoding("utf-8");

    //String url = new String(request.getParameter("url").getBytes("ISO-8859-1"),"UTF-8");
    //String url = new String(request.getParameter("url").getBytes("ISO-8859-1"),"GBK");

    String url = request.getParameter("url");
    url = url.replaceAll("@", "&");
    url = url.replaceAll("!", "?");

    try {
        URL u = new URL(url);
        InputStream in = u.openStream();
        in = new BufferedInputStream(in);
        Reader r = new InputStreamReader(in, "UTF-8");
        BufferedReader br = new BufferedReader(r);
        String line = null;
        while((line = br.readLine()) != null){
            out.print(line);
        }
    }
    catch (MalformedURLException ex){
        out.print(url + " is not a parseable URL");
    }
    catch (IOException ex){
        out.print(ex);
    }
%>